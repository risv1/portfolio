import { useEffect, useState } from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
	const [isPanelOpen, setIsPanelOpen] = useState(false);
	const [currentTime, setCurrentTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const options: Intl.DateTimeFormatOptions = {
				timeZone: "Asia/Kolkata",
				hour: "numeric",
				minute: "2-digit",
				hour12: true,
				timeZoneName: "short",
			};
			const timeString = now.toLocaleTimeString("en-US", options);
			setCurrentTime(timeString);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	const navLinks = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About" },
		{ to: "/projects", label: "Projects" },
		{ to: "/work", label: "Work" },
	];

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md w-full">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex flex-row justify-between items-center h-16">
						<div className="flex items-center gap-10">
							<Link
								to="/"
								className={`font-medium text-lg hover:opacity-80 transition-all relative z-50 ${
									isPanelOpen ? "text-black" : "text-white"
								}`}
							>
								Rishi Viswanathan
							</Link>
							<span
								className={`text-sm md:text-md relative z-50 ${
									isPanelOpen ? "text-black" : "text-white"
								}`}
							>
								{currentTime}
							</span>
						</div>

						<div className="hidden lg:flex items-center ml-auto mr-32">
							{navLinks.map((link, index) => (
								<Link
									key={link.to}
									to={link.to}
									className="text-white/80 hover:text-white transition-colors text-md font-medium"
								>
									{link.label}
									{index < navLinks.length - 1 && (
										<span className="mr-1 text-white/80">,</span>
									)}
								</Link>
							))}
						</div>

						<div className="flex items-center gap-10">
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="hidden lg:block px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all"
							>
								Resume
							</a>
							<button
								onClick={() => setIsPanelOpen(true)}
								className={`lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center transition-colors ${
									isPanelOpen ? "text-black" : "text-white"
								}`}
								aria-label="Menu"
							>
								<span className="w-6 h-0.5 bg-current transition-all"></span>
								<span className="w-6 h-0.5 bg-current transition-all"></span>
								<span className="w-6 h-0.5 bg-current transition-all"></span>
							</button>
						</div>
					</div>
				</div>
			</nav>

			<div
				className={`fixed top-0 right-0 h-full w-full bg-white z-40 transition-transform duration-500 ease-in-out ${
					isPanelOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex flex-col h-full p-8">
					<div className="flex justify-end mb-16">
						<button
							onClick={() => setIsPanelOpen(false)}
							className="text-black text-sm font-medium hover:opacity-70 transition-opacity"
						>
							Close ✕
						</button>
					</div>

					<nav className="flex flex-col gap-6 flex-1">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								onClick={() => setIsPanelOpen(false)}
								className="text-black text-5xl font-bold hover:opacity-70 transition-opacity"
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="mt-auto pt-8 border-t border-black/10">
						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block px-8 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-black/90 transition-all"
						>
							View Resume →
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
