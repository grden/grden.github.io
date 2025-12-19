export default function Awards() {
    return (
        <div className="mb-16">
            <h2 className="text-lg font-semibold mb-6">🏆 Honors & Awards</h2>
            <ul>
                <li className="border-l-3 border-gray-300 pl-4 py-0 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <p><strong className="font-medium">Academic Excellence Scholarship (4 consecutive semesters),</strong> Kyung Hee University</p>
                        <p className="text-gray-500">2023 - 2025</p>
                    </div>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-0 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <p><strong className="font-medium">Special Award,</strong> Open Source Contributon Academy, Ministry of Science and ICT</p>
                        <p className="text-gray-500">Nov 2025</p>
                    </div>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-0 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <p><strong className="font-medium">2nd Place,</strong> Artistic Software Contest, Kyung Hee University</p>
                        <p className="text-gray-500">Oct 2025</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}