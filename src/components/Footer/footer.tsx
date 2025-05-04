import { EMAIL, GITHUB, INSTAGRAM, RESUME } from "../../constants/contacts";

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="flex flex-col justify-between items-left md:flex-row">
                    <p className="text-sm text-left text-gray-500 font-normal mb-3 md:mb-0">
                        <div className="mb-2">Reach me at <a href={`mailto:${EMAIL}`} className="hover:text-gray-800 transition-colors underline">micky4@khu.ac.kr</a> !</div>
                        <p className="cursor-pointer hover:text-gray-800 transition-colors underline inline" onClick={() => window.open(RESUME, "_blank")}>Resume</p> ↗
                        &nbsp; | &nbsp;
                        <p className="cursor-pointer hover:text-gray-800 transition-colors underline inline" onClick={() => window.open(INSTAGRAM, "_blank")}>Instagram</p> ↗
                        &nbsp; | &nbsp;
                        <p className="cursor-pointer hover:text-gray-800 transition-colors underline inline" onClick={() => window.open(GITHUB, "_blank")}>GitHub</p> ↗
                    </p>
                    <div className="flex flex-col md:flex-row gap-2">
                        <span className="text-sm text-gray-500">ⓒ 2025. Jeongwon Kim. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}