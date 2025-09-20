import ArrowLink from '@/components/ArrowLink/arrowLink';

export default function Others() {
    return (
        <div className="mb-16">
            <h2 className="text-lg font-semibold mb-6">🤖 Others</h2>

            {/* Open Source Section */}
            <div className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                <h3 className="font-medium mb-2">Open Source Contribution</h3>
                <ul>
                    <li className="text-gray-500 mb-1"><ArrowLink href="https://github.com/pyodide" className="font-normal text-gray-500">Pyodide</ArrowLink>
                        , a Python distribution for the browser and Node.js based on WebAssembly.</li>
                </ul>
            </div>

            {/* Localization Section */}
            <div className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                <h3 className="font-medium mb-2">Localization</h3>
                <ul>
                    <li className="text-gray-500 mb-1">
                        <ArrowLink href="https://crowdin.com/project/iina" className="font-normal text-gray-500">IINA</ArrowLink>, English - Korean localization(6th top contributor).
                    </li>
                </ul>
            </div>
        </div>
    );
}
