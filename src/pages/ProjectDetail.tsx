import { useParams, Navigate } from 'react-router-dom';
import Default from '../layouts/Default';
import IntroDescription from '../components/projects/IntroDescription';
import ProductDescription from '../components/projects/ProductDescription';
import Gallery from '../components/projects/Gallery';
import { projectDetails } from '../data/projects';

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // If no slug or project not found, redirect to projects page
    if (!slug || !projectDetails[slug]) {
        return <Navigate to="/projects" replace />;
    }

    const project = projectDetails[slug];

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
                />

                {/* Gallery Section */}
                <Gallery images={project.gallery} />
            </div>
        </Default>
    );
};

export default ProjectDetail;
