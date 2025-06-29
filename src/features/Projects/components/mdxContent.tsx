type MDXContentProps = {
    Component: React.ComponentType<any>;
}

export default function MDXContent({ Component }: MDXContentProps) {
    return (
        <article className="prose prose-slate lg:prose-lg max-w-none mb-24">
        <Component
            // This suppresses the frontmatter display
            components={{
                // Override the components that might render frontmatter
                frontmatter: () => null,
                wrapper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
            }}
        />
    </article>
    );
}