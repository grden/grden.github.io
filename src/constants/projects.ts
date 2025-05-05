export type CategoryType = 'All' | 'Internship' | 'Personal Project'

export const CATEGORY_LIST: CategoryType[] = ['All', 'Internship', 'Personal Project']

export const ALL_CATEGORY = 'All';

export type ProjectType = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    thumbnail: string;
    tags: string[];
    category: CategoryType;
}

export const PROJECTS: ProjectType[] = [
    {
        slug: 'project-1',
        title: 'Project One',
        date: 'Fall 2025',
        summary: 'A short description of project one',
        thumbnail: '/projects/img2.jpg',
        tags: ['React', 'TypeScript', 'Tailwind'],
        category: 'Internship'
    },
    {
        slug: 'project-2',
        title: 'Project Two',
        date: 'Winter 2025',
        summary: 'A short description of project two',
        thumbnail: '/projects/img3.jpg',
        tags: ['Next.js', 'Firebase', 'UI/UX'],
        category: 'Personal Project'
    },
    {
        slug: 'project-3',
        title: 'Project Three',
        date: 'Winter 2025',
        summary: 'A short description of project three',
        thumbnail: '/projects/img1.jpg',
        tags: ['React', 'TypeScript', 'Tailwind'],
        category: 'Internship'
    },
]