import { CategoryTab } from '@/features/Projects/components/categoryTab';
import { ALL_CATEGORY, CATEGORY_LIST, PROJECTS } from '@/constants/projects';
import { useState, useEffect } from 'react';
import { filterProjectsByCategory } from '@/features/Projects/utils/tabs';
import ProjectGrid from '@/features/Projects/components/projectGrid';

export default function Projects() {
    const [currentTab, setCurrentTab] = useState(ALL_CATEGORY);
    const [selectedProjects, setSelectedProjects] = useState(PROJECTS);

    useEffect(() => {
        if (currentTab === ALL_CATEGORY) {
            setSelectedProjects(PROJECTS);
        } else {
            const filteredProjects = filterProjectsByCategory(PROJECTS, currentTab);
            setSelectedProjects(filteredProjects);
        }
    }, [currentTab])

    return (
        <>
            <title>Projects - Jeongwon Kim</title>
            <div className="mt-12 mb-24">
                <CategoryTab
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    tabList={CATEGORY_LIST}
                />
                <ProjectGrid selectedProjects={selectedProjects} />
            </div>
        </>
    )
}