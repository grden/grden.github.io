import { useParams, Link } from 'react-router-dom';
import { getProjectContent } from '@/utils/mdx-utils';
import { PROJECTS } from '@/constants/projects';
import NotFound from '../not-found';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from 'react';

export default function ProjectDetails() {
    // Get the projectId from the URL
    const { projectId } = useParams<{ projectId: string }>();
    // Add state to store the title
    const [pageTitle, setPageTitle] = useState('');

    // Get the project details from constants
    const project = PROJECTS.find(p => p.slug === projectId);

    // Get the MDX content
    const mdxContent = getProjectContent(projectId || '');

    // Set page title when project data is available
    useEffect(() => {
        if (project) {
            setPageTitle(`${project.title} - Jeongwon Kim`);
        }
    }, [project]);

    // If we couldn't find the project or its content, show 404
    if (!project || !mdxContent) {
        return <NotFound />;
    }

    // Get the MDX component from the content
    const { Component, frontmatter } = mdxContent;

    return (
        <>
            <title>{pageTitle}</title>
            {/* Back button */}
            <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-black my-12"
            >
                <BiArrowBack />
                <span>Back to Projects</span>
            </Link>

            {/* Project header - Using project data from constants instead of frontmatter */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                    <p className="text-gray-500 mr-4">{frontmatter.role} &nbsp; · &nbsp; {frontmatter.date}</p>
                </div>
                <img
                    src={frontmatter.thumbnail}
                    alt={frontmatter.title}
                    className="w-full rounded-xl object-cover max-h-108"
                />
            </div>

            {/* MDX content without showing the frontmatter */}
            <article className="prose prose-slate lg:prose-lg max-w-none mb-24">
                <Component
                    // This suppresses the frontmatter display
                    components={{
                        // Override the components that might render frontmatter
                        frontmatter: () => null,
                        wrapper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
                    }}
                />
            </article>
        </>
    );
}
