import { headerItemList } from "./headerItemList";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <header className="w-full">
            <nav className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold">
                        <span className="hidden sm:inline">JEONGWON KIM</span>
                        <span className="sm:hidden">JW</span>
                    </Link>
                    <div className="flex items-center gap-8">
                        {headerItemList.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`text-lg font-semibold transition-colors duration-300 hover:text-black
                                ${location.pathname === item.href ? "text-black" : "text-gray-500"}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}