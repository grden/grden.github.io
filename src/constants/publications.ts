export type PublicationType = {
    title: string;
    authors: string[];
    conference: string;
    thumbnail: string;
    link?: string;
}

export const PUBLICATIONS: PublicationType[] = [
    {
        title: 'Development of a Personalized Content Filtering System for Upward-Comparison-Inducing Content',
        authors: ['Jeongwon Kim', 'Eunho Kim', 'Sangkeun Park'],
        conference: 'KCC 2025 (Under-review)',
        thumbnail: '/publications/kcc2025-3.jpg',
    },
]