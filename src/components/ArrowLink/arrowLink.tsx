interface ArrowLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
    const baseClassName = "text-black font-medium underline decoration-gray-400 hover:decoration-inherit transition-colors duration-200";
    const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;
    const textColor = className?.match(/text-([a-zA-Z0-9-]+)/)?.[1] || 'black';

    return (
        <>
            <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={href} 
                className={finalClassName}
            >
                {children}
            </a>
            <span className={`relative bottom-[-0.1em] ml-0.5 text-${textColor}`}>↗</span>
        </>
    );
} 