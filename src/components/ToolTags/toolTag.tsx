interface ToolTagProps {
    tags: string[];
}

export default function ToolTag({ tags }: ToolTagProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-800 text-sm px-2.5 py-1 rounded">
                    {tag}
                </span>
            ))}
        </div>
    )
}