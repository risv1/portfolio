import Default from "../layouts/Default";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import Skills from "../components/home/Skills";

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
