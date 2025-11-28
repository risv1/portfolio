import SEO from "../components/common/SEO";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import Default from "../layouts/Default";

const Home: React.FC = () => {
	return (
		<Default>
			<SEO
				title="Home"
				description="Welcome to Rishi Viswanathan's personal portfolio website. Explore projects, skills, and more."
			/>
			<Hero />
			<Featured />
			<Skills />
		</Default>
	);
};

export default Home;
