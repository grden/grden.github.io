interface TooltipProps {
    content: string;
    children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
    return (
        <div className="group relative flex max-w-max flex-col items-center justify-center">
            {children}
            <div className="absolute left-1/2 top-12 ml-auto mr-auto min-w-max -translate-x-1/2 opacity-0 transform transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                <div className="flex max-w-xs flex-col items-center shadow-md">
                    <div className="rounded-sm bg-black opacity-60 px-2 py-1.5 text-center text-xs font-light text-white">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}