import { PUBLICATIONS } from "@/constants/publications";
import { Icon } from "@iconify/react";

export default function PublicationList() {
    return (
        <div className="mt-12 mb-24">
            <div className="space-y-10">
                {PUBLICATIONS.map((publication, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-8">
                        <img
                            src={publication.thumbnail}
                            alt={publication.title}
                            className="rounded-md w-full h-72 md:h-40 md:w-96 object-cover"
                        />
                        <div className="flex flex-col justify-start">
                            <h2 className="text-lg font-semibold mb-3">{publication.title}</h2>
                            <p className="mb-2 text-gray-600">{publication.authors.join(', ')}</p>
                            <p className="mb-3 text-gray-600">{publication.conference}</p>

                            <div className="flex flex-wrap">

                                <a
                                    href={publication.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`bg-gray-100 text-sm font-semibold px-1.5 py-1 rounded inline-flex items-center
                                        ${publication.link ? 'text-gray-800 ' : 'text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    <Icon icon="mdi:file-pdf-box" className="w-5 h-5 mr-1" />
                                    Read Paper
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}