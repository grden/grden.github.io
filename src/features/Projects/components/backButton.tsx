import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';

export default function BackButton() {
    return (
        <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black my-12"
        >
            <BiArrowBack />
            <span>Back to Projects</span>
        </Link>
    );
}