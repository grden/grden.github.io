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
        authors: ['Jeongwon Kim', 'Eunnho Kim', 'Sangkeun Park'],
        conference: 'KCC 2025 (Accepted)',
        thumbnail: '/publications/kcc2025-3.jpg',
        link: '/publications/최종본.pdf'
    },
]