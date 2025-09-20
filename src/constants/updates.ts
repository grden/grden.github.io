export type UpdateCategory = 'paper' | 'project' | 'work';

export type UpdateType = {
    title: string;
    date: string;
    link: string;
    category: UpdateCategory;
}

export const UPDATES: UpdateType[] = [
    {
        title: "Started as an Intern at KETI(Korea Electronics Technology Institute).",
        date: "Sep 2025",
        link: "https://www.keti.re.kr/eng/main/main.php",
        category: "work"
    },
    {
        title: "Research paper on HCI got accepted to KCC 2025.",
        date: "Jun 2025",
        link: "/publications",
        category: "paper"
    },
    {
        title: "Started as a Software Engineer Intern at M5ers.",
        date: "Nov 2024",
        link: "/projects/m5ers",
        category: "work"
    }
]