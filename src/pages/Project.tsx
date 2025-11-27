import { useParams, Navigate } from "react-router";
import Default from '../layouts/Default';
import IntroDescription from '../components/projects/IntroDescription';
import ProductDescription from '../components/projects/ProductDescription';
import Gallery from '../components/projects/Gallery';
import { projectDetails } from '../data/projects';

const Project: React.FC = () => {
	const { name } = useParams<{ name: string }>();

	// If no name or project not found, redirect to projects page
	if (!name || !projectDetails[name]) {
		return <Navigate to="/projects" replace />;
	}

	const project = projectDetails[name];

	return (
		<Default>
			<div className="w-full bg-black">
				{/* Intro Section */}
				<IntroDescription
					title={project.title}
					description={project.introDescription}
					link={project.link}
					backgroundImage={project.introBackground}
				/>

				{/* Product Description Section */}
				<ProductDescription
					description={project.productDescription}
					productGif={project.productGif}
					technologies={project.technologies}
				/>

				{/* Gallery Section - Only show if there are images */}
				{project.gallery && project.gallery.length > 0 && (
					<Gallery images={project.gallery} />
				)}
			</div>
		</Default>
	);
};

export default Project;
