import { Link } from 'react-router-dom';
import { ProjectType } from '@/constants/projects';

export default function ProjectGrid({ selectedProjects }: { selectedProjects: ProjectType[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {selectedProjects.map((project) => (
                <Link
                    to={`/projects/${project.slug}`}
                    key={project.slug}
                >
                    <div className="mb-4">
                        <div className="w-full h-64 overflow-hidden rounded-lg">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-3">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
    )
}