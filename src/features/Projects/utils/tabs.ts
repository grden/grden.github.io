import { ProjectType } from "@/constants/projects";

export const filterProjectsByCategory = (projects: ProjectType[], currentTab: string) => {
    if (currentTab === 'All') return projects;
    return projects.filter((project) => {
        const { category } = project;
        if (Array.isArray(category)) {
            return category.includes(currentTab);
        }
        return category === currentTab;
    })
}