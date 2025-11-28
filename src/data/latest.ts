import mewzImage from "../assets/latest/mewz.png"
import paperImage from "../assets/latest/paper.png"

type LatestUpdate = {
	id: string;
	image: string;
	title: string;
	description: string;
}

export const latestUpdates: LatestUpdate[] = [
        {
            id: "1",
            image: mewzImage,
            title: "Project - Mewz",
            description: "Making a personal management dashboard for myself.",
        },
		{
			id: "2",
			image: paperImage,
			title: "Research Paper",
			description: "Working on a research paper in phylogenetics",
		},
	];
