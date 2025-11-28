import { Helmet } from "react-helmet-async";

interface SEOProps {
	title: string;
	description: string;
	image?: string;
}

const SEO: React.FC<SEOProps> = ({
	title,
	description,
	image = "/logo.png",
}) => {
	const fullTitle = `${title} | Rishi Viswanathan`;

	return (
		<Helmet defer={false} key={fullTitle}>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />

			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	);
};

export default SEO;
