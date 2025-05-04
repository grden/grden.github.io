import { UPDATES } from "@/constants/updates";
import { Link } from "react-router-dom";

export default function UpdateSection() {
    return (
        <div className="mt-16">
            <h2 className="text-lg font-semibold mb-6">Recent Updates</h2>
            <div className="cursor-pointer space-y-2">
                {UPDATES.map((update) => (
                    <Link to={update.link} key={update.title} className="border-l-3 border-gray-300 pl-4 py-1 group relative block">
                        <div className="flex flex-row items-start">
                            <p className="text-gray-500 mr-3 whitespace-nowrap">{update.date}</p>
                            <p>{update.title} <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span></p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}