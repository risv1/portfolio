import { Navigate, useParams } from "react-router-dom";
import Gallery from "../components/projects/Gallery";
import IntroDescription from "../components/projects/IntroDescription";
import ProductDescription from "../components/projects/ProductDescription";
import { projectDetails } from "../data/projects";
import Default from "../layouts/Default";

const ProjectDetail: React.FC = () => {
	const { slug } = useParams<{ slug: string }>();

	if (!slug || !projectDetails[slug]) {
		return <Navigate to="/projects" replace />;
	}

	const project = projectDetails[slug];

	return (
		<Default>
			<div className="w-full bg-black">
				<IntroDescription
					title={project.title}
					description={project.introDescription}
					link={project.link}
					backgroundImage={project.introBackground}
				/>

				<ProductDescription
					description={project.productDescription}
					productGif={project.productGif}
				/>

				<Gallery images={project.gallery} />
			</div>
		</Default>
	);
};

export default ProjectDetail;
