export type UpdateCategory = 'paper' | 'project' | 'work';

export type UpdateType = {
    title: string;
    date: string;
    link: string;
    category: UpdateCategory;
}

export const UPDATES: UpdateType[] = [
    {
        title: "Research paper on HCI got accepted to KCC 2025.",
        date: "Jun 2025",
        link: "/publications",
        category: "paper"
    },
    {
        title: "Launched official website for Ludens, KHU's game development club.",
        date: "Feb 2025",
        link: "/projects/ludens",
        category: "project"
    },
    {
        title: "Started as a Software Engineer Intern at M5ers.",
        date: "Nov 2024",
        link: "/projects/m5ers",
        category: "work"
    }
]