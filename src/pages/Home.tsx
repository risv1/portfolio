import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import Default from "../layouts/Default";

const Home: React.FC = () => {
	return (
		<Default>
			<Hero />
			<Featured />
			<Skills />
		</Default>
	);
};

export default Home;
