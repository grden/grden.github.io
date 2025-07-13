import { Link } from 'react-router-dom'

export default function BackButton() {
    return (
        <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black my-12"
        >
           <span className="ml-1 bottom-[0.05em] relative">←</span>Back to Projects
        </Link>
    );
}