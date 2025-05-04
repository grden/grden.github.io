import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 w-full max-w-4xl px-4 mx-auto">
                {children}
            </main>
            <Footer />
        </section>
    )
}