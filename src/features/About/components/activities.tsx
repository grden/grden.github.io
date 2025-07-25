import ArrowLink from '@/components/ArrowLink/arrowLink';

export default function Activities() {
    return (
        <div className="mb-16">
            <h2 className="text-lg font-semibold mb-6">👾 Activities</h2>
            <ul>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <span>
                            <ArrowLink href="https://www.instagram.com/khux.khux/" className="font-semibold">
                                KHUX, an UX/HCI Club @ KHU
                            </ArrowLink>
                        </span>
                        <p className="text-gray-500">Mar 2025 - Present</p>
                    </div>
                    <p className="text-gray-500">Member </p>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <span>
                            <ArrowLink href="https://www.instagram.com/gdgoc.khu/" className="font-semibold">
                                Google Developer Student Club @ KHU
                            </ArrowLink>
                        </span>
                        <p className="text-gray-500">Sep 2024 - Present</p>
                    </div>
                    <p className="text-gray-500">Frontend Member </p>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <span>
                            <ArrowLink href="https://www.instagram.com/khu_alttium/" className="font-semibold">
                                Alttium (Band Club) @ KHU
                            </ArrowLink>
                        </span>
                        <p className="text-gray-500">Jan 2024 - Dec 2024</p>
                    </div>
                    <p className="text-gray-500">Vice President</p>
                </li>
            </ul>
        </div>
    );
}