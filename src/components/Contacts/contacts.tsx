import { EMAIL, GITHUB, RESUME } from "@/constants/contacts"
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiReadCvLogoBold } from "react-icons/pi";

export default function Contacts() {
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

    return (
        <div className="flex gap-4">
            <PiReadCvLogoBold className="w-6 h-6 cursor-pointer text-gray-500 hover:text-black transition-colors duration-200" onClick={onClick} id="resume" />
            <MdEmail className="w-6 h-6 cursor-pointer text-gray-500 hover:text-black transition-colors duration-200" onClick={onClick} id="email" />
            <FaGithub className="w-5.5 h-5.5 cursor-pointer text-gray-500 hover:text-black transition-colors duration-200" onClick={onClick} id="github" />
        </div>
    )
}