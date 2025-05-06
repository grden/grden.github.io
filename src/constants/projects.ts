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
        slug: 'ludens',
        title: 'Ludens',
        date: 'Winter 2025',
        summary: 'Promotional website for Ludens, a student game development club at Kyung Hee University.',
        thumbnail: '/projects/ludens-thumbnail.png',
        tags: ["Next.js", "TypeScript", "Git", "GitHub", "Vercel"],
        category: 'Personal Project'
    },
    {
        slug: 'm5ers',
        title: 'M5ers',
        date: 'Winter 2024',
        summary: 'Built a start of the web application to test and manage ASIC-based cryptocurrency mining machines.',
        thumbnail: '/projects/m5ers-thumbnail.png',
        tags: ["React", "JavaScript", "Docker", "Jira"],
        category: 'Internship'
    },
    {
        slug: 'korean-army-health-monitor',
        title: 'Korean Army Health Monitor',
        date: 'Fall 2024',
        summary: 'A real-time safety monitoring system combining hardware and software to prevent heat-related illnesses among Korean military.',
        thumbnail: '/projects/roka-thumbnail.png',
        tags: ["Flutter", "Firebase", "Arduino", "Scikit-learn", "FastAPI"],
        category: 'Personal Project'
    },
    {
        slug: 'tutor',
        title: 'Indeed',
        date: 'Spring 2024',
        summary: 'Tutor matching mobile application.',
        thumbnail: '/projects/tutor.png',
        tags: ["Figma", "Flutter", "Firebase", "gRPC", "Firebase", "MongoDB"],
        category: 'Personal Project'
    }
]