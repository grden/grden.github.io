export type CategoryType = 'All' | 'Internship' | 'Personal Project' | 'Industry Project'

export const CATEGORY_LIST: CategoryType[] = ['All', 'Internship', 'Personal Project', 'Industry Project']

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
        slug: 'riido',
        title: 'Riido',
        date: 'Autumn 2025',
        summary: 'Redesigned user experience of an AI project management tool.',
        thumbnail: '/projects/riido/riido-thumbnail.png',
        tags: ["User Research", "UX Design", "A/B Test", "Prototyping", "Frontend Engineering"],
        category: 'Industry Project'
    },
    // {
    //     slug: 'parmful',
    //     title: 'Parmful',
    //     date: 'Summer 2025',
    //     summary: 'Redesigned user experience of an AI project management tool.',
    //     thumbnail: '/projects/parmful/parmful-thumbnail-1.png',
    //     tags: ["User Research", "UX Design", "A/B Test", "Figma", "React"],
    //     category: 'Personal Project'
    // },
    {
        slug: 'filca',
        title: 'Filca',
        date: 'Spring 2025',
        summary: 'A Chrome extension that mitigates distractions by filtering YouTube feeds based on user intent.',
        thumbnail: '/projects/yc/yc-thumbnail-1.jpg',
        tags: ["UX Design", "Full Stack Engineering", "Data Analysis"],
        category: 'Personal Project'
    },
    {
        slug: 'ezstress',
        title: 'EzStress',
        date: 'Spring 2025',
        summary: 'Web service to predict load bottlenecks using AI, perform stress testing, and visualize the results.',
        thumbnail: '/projects/ezstress-thumbnail-2.jpg',
        tags: ["Product Design", "Prototyping","Frontend Engineering"],
        category: 'Personal Project'
    },
    {
        slug: 'ludens',
        title: 'Ludens',
        date: 'Winter 2025',
        summary: 'Promotional website for Ludens, a student game development club at Kyung Hee University.',
        thumbnail: '/projects/ludens/ludens-thumbnail.jpg',
        tags: ["Product Design", "Interaction Design", "Frontend Engineering", "Google Analytics", "SEO"],
        category: 'Personal Project'
    },
    {
        slug: 'm5ers',
        title: 'M5ers',
        date: 'Winter 2024',
        summary: 'Built a start of the web application to test and manage ASIC-based cryptocurrency mining machines.',
        thumbnail: '/projects/m5ers-thumbnail.jpg',
        tags: ["Product Design", "Frontend Engineering", "Technical Documentation"],
        category: 'Internship'
    },
    {
        slug: 'korean-army-health-monitor',
        title: 'Korean Army Health Monitor',
        date: 'Fall 2024',
        summary: 'A real-time safety monitoring system combining hardware and software to prevent heat-related illnesses among Korean military.',
        thumbnail: '/projects/roka-thumbnail.png',
        tags: ["Product Design", "Mobile Engineering", "Backend Engineering", "Machine Learning"],
        category: 'Personal Project'
    },
    // {
    //     slug: 'tutor',
    //     title: 'Indeed',
    //     date: 'Spring 2024',
    //     summary: 'Tutor matching mobile application.',
    //     thumbnail: '/projects/tutor.png',
    //     tags: ["Figma", "Flutter", "Firebase", "gRPC", "MongoDB"],
    //     category: 'Personal Project'
    // }
]