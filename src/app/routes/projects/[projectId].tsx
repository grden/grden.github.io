import { useParams } from 'react-router-dom';
import { getProjectContent } from '@/utils/mdx-utils';
import { PROJECTS } from '@/constants/projects';
import NotFound from '../not-found';
import { useEffect, useState } from 'react';
import BackButton from '@/features/Projects/components/backButton';
import ProjectHeader from '@/features/Projects/components/projectHeader';
import MDXContent from '@/features/Projects/components/mdxContent';
import ScrollReveal from '@/components/Animations/scrollReveal';

export default function ProjectDetails() {
    // get the projectId from the URL
    const { projectId } = useParams<{ projectId: string }>();
    // add state to store the title
    const [pageTitle, setPageTitle] = useState('');

    // get the project details from constants
    const project = PROJECTS.find(p => p.slug === projectId);

    // get the MDX content
    const mdxContent = getProjectContent(projectId || '');

    // set page title when project data is available
    useEffect(() => {
        if (project) {
            setPageTitle(`${project.title} - Jeongwon Kim`);
        }
    }, [project]);

    // show 404 if no project or mdx content
    if (!project || !mdxContent) {
        return <NotFound />;
    }

    // Get the MDX component from the content
    const { Component, frontmatter } = mdxContent;

    return (
        <>
            <title>{pageTitle}</title>
            <BackButton />
            <ScrollReveal delay={0.3}>
                <ProjectHeader frontmatter={frontmatter as { title: string; date: string; role: string; thumbnail: string; }} />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
                <MDXContent Component={Component} />
            </ScrollReveal>
        </>
    );
}
