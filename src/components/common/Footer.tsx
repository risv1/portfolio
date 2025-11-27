import { Link } from "react-router";

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
        { href: "https://x.com/your-handle", label: "X" },
        { href: "https://github.com/your-username", label: "GitHub" },
    ];

    const navLinks = [
        { to: "/about", label: "About" },
        { to: "/projects", label: "Projects" },
        { to: "/work", label: "Work" },
    ];

    return (
        <footer className="w-full bg-black text-white z-50 border-t border-white/10 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Rishi Viswanathan
                        </h2>
                        <p className="text-white/60 text-sm leading-relaxed max-w-md">
                            Student and developer passionate about application development and deep learning, building thoughtful solutions for real-world challenges.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Go to
                        </h3>
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-white/60 hover:text-white transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Connect
                        </h3>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-white transition-colors text-sm"
                                >
                                    {link.label} →
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-6 text-sm text-white/40">
                        <span>© {currentYear} Rishi Viswanathan</span>
                        <span className="hidden md:block">•</span>
                        <span className="hidden md:block">Chennai & Bangalore</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                        <span>Back to top</span>
                        <svg
                            className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
