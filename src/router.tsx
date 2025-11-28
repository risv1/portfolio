import { Route, Routes } from "react-router";
import About from "./pages/About";
import GlobalError from "./pages/GlobalError";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

const Router: React.FC = () => {
	return (
		<GlobalError>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:name" element={<Project />} />
				<Route path="/work" element={<Work />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</GlobalError>
	);
};

export default Router;
