import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<div className="min-h-screen bg-black text-white overflow-x-hidden overscroll-none">
			<Navbar />
			<main className="w-full overflow-x-hidden">{children}</main>
			<Footer />
		</div>
	);
};

export default Default;
