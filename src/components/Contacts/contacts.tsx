import { EMAIL, GITHUB, RESUME } from "@/constants/contacts"
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Contacts() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const onClick = (e: React.MouseEvent) => {
        switch (e.currentTarget.id) {
            case "email":
                window.open(`mailto:${EMAIL}`, "_blank");
                break;
            case "resume":
                window.open(RESUME, "_blank");
                break;
            case "github":
                window.open(GITHUB, "_blank");
                break;
        }
    }

    const handleMouseEnter = (id: string) => {
        setHoveredItem(id);
    }

    const handleMouseLeave = () => {
        setHoveredItem(null);
    }

    return (
        <div className="flex gap-3 items-center">
            <div 
                className="flex items-center cursor-pointer group relative hover:bg-gray-100 hover:px-2 py-1 rounded-md transition-all duration-200" 
                onClick={onClick} 
                id="resume"
                onMouseEnter={() => handleMouseEnter('resume')}
                onMouseLeave={handleMouseLeave}
            >
                
                <Icon icon="solar:file-text-bold-duotone" className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-200" />
                <span 
                    className={`ml-2 font-medium transition-all duration-500 ${
                        hoveredItem === 'resume' 
                            ? 'opacity-100 max-w-20' 
                            : 'opacity-0 max-w-0 overflow-hidden'
                    }`}
                >
                    Resume
                </span>
            </div>

            <div 
                className="flex items-center cursor-pointer group relative hover:bg-gray-100 hover:px-2 py-1 rounded-md transition-all duration-200" 
                onClick={onClick} 
                id="email"
                onMouseEnter={() => handleMouseEnter('email')}
                onMouseLeave={handleMouseLeave}
            >
                <Icon icon="solar:letter-bold-duotone" className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-200" />
                <span 
                    className={`ml-2 font-medium transition-all duration-500 ${
                        hoveredItem === 'email' 
                            ? 'opacity-100 max-w-20' 
                            : 'opacity-0 max-w-0 overflow-hidden'
                    }`}
                >
                    Email
                </span>
            </div>

            <div 
                className="flex items-center cursor-pointer group relative hover:bg-gray-100 hover:px-2 py-1 rounded-md transition-all duration-200" 
                onClick={onClick} 
                id="github"
                onMouseEnter={() => handleMouseEnter('github')}
                onMouseLeave={handleMouseLeave}
            >
                <Icon icon="mdi:github" className="w-7 h-7 text-gray-400 group-hover:text-black transition-colors duration-200" />
                <span 
                    className={`ml-2 font-medium transition-all duration-500 ${
                        hoveredItem === 'github' 
                            ? 'opacity-100 max-w-20' 
                            : 'opacity-0 max-w-0 overflow-hidden'
                    }`}
                >
                    GitHub
                </span>
            </div>
        </div>
    )
}