export default function Work() {
    return (
        <div className="mb-16">
            <h2 className="text-lg font-semibold mb-6">💻 Work Experience</h2>
            <ul>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <p><span className="font-semibold">Kyung Hee University</span> / Seoul, Republic of Korea</p>
                        <p className="text-gray-500">Mar 2025 - Present</p>
                    </div>
                    <p className="text-gray-500">Teaching Assistant</p>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-1">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <p><span className="font-semibold">M5ers</span> / California, United States</p>
                        <p className="text-gray-500">Nov 2024 - Feb 2025</p>
                    </div>
                    <p className="text-gray-500">Software Engineer Intern</p>
                </li>
            </ul>
        </div>
    );
}