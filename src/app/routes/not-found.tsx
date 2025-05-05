export default function NotFound() {
    return (
        <>
            <title>404 - Page Not Found</title>
            <div className="flex flex-col h-full items-center justify-center py-16">
                <h1 className="text-4xl font-bold mb-6">404 💀</h1>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
            </div>
        </>
    )
}