type ProjectHeaderProps = {
    frontmatter: {
        title: string;
        date: string;
        role: string;
        thumbnail: string;
    }
}

export default function ProjectHeader({ frontmatter }: ProjectHeaderProps) {
    return (
        <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
            <p className="text-gray-500 mr-4">{frontmatter.role} &nbsp; · &nbsp; {frontmatter.date}</p>
        </div>
        <img
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            className="w-full rounded-xl object-cover max-h-108"
        />
    </div>
    );
}