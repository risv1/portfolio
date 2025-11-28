import { Navigate, useParams } from "react-router";
import Gallery from "../components/projects/Gallery";
import IntroDescription from "../components/projects/IntroDescription";
import ProductDescription from "../components/projects/ProductDescription";
import { getProjectBySlug } from "../data/projects";
import Default from "../layouts/Default";

const Project: React.FC = () => {
    const { name } = useParams<{ name: string }>();

    const project = name ? getProjectBySlug(name) : undefined;

    if (!name || !project) {
        return <Navigate to="/projects" replace />;
    }

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
                    technologies={project.technologies}
                />

                {project.gallery && project.gallery.length > 0 && (
                    <Gallery images={project.gallery} />
                )}
            </div>
        </Default>
    );
};

export default Project;
