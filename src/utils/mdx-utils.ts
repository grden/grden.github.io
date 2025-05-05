import React from 'react';

// Define types for MDX modules
type MDXContent = React.ComponentType<any>;

interface MDXModule {
    default: MDXContent;
    frontmatter?: Record<string, any>;
}

// Import all MDX files
// Note: TypeScript will still warn about this, but it works at runtime
const projectModules = import.meta.glob('/src/contents/projects/*.mdx', { eager: true });

// Helper type for the return value of getProjectContent
interface ProjectContent {
    Component: MDXContent;
    frontmatter: Record<string, any>;
}

/**
 * Get MDX content for a specific project by slug
 * @param slug The project slug
 * @returns The MDX component and frontmatter, or null if not found
 */
export function getProjectContent(slug: string): ProjectContent | null {
    try {
        // Find the module that matches the slug
        const projectPath = `/src/contents/projects/${slug}.mdx`;

        // Cast to any to avoid TypeScript errors, then to our interface
        const module = projectModules[projectPath] as unknown as MDXModule;

        if (!module || !module.default) {
            return null;
        }

        return {
            Component: module.default,
            frontmatter: module.frontmatter || {},
        };
    } catch (error) {
        console.error(`Error loading project ${slug}:`, error);
        return null;
    }
}