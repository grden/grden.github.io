import { EMAIL, GITHUB, CV } from "@/constants/contacts"
import { Icon } from "@iconify/react";
import Tooltip from "../Tooltip/tootip";

export default function Contacts() {

    const onClick = (e: React.MouseEvent) => {
        switch (e.currentTarget.id) {
            case "email":
                window.open(`mailto:${EMAIL}`, "_blank");
                break;
            case "cv":
                window.open(CV, "_blank");
                break;
            case "github":
                window.open(GITHUB, "_blank");
                break;
        }
    }

    return (
        <div className="flex gap-1 items-center">
            <Tooltip content="CV">
                <div
                    className="flex items-center cursor-pointer group relative hover:bg-gray-100 p-1.5 rounded-md transition-all duration-300"
                    onClick={onClick}
                    id="cv"
                >

                    <Icon icon="solar:file-text-bold-duotone" className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-300" />
                </div>
            </Tooltip>
            <Tooltip content="Email">
                <div
                    className="flex items-center cursor-pointer group relative hover:bg-gray-100 p-1.5 rounded-md transition-all duration-300"
                    onClick={onClick}
                    id="email"
                >
                    <Icon icon="solar:letter-bold-duotone" className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-300" />
                </div>
            </Tooltip>
            <Tooltip content="GitHub">
                <div
                    className="flex items-center cursor-pointer group relative hover:bg-gray-100 p-1 rounded-md transition-all duration-300"
                    onClick={onClick}
                    id="github"
                >
                    <Icon icon="mdi:github" className="w-7 h-7 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </div>
            </Tooltip>
        </div>
    )
}