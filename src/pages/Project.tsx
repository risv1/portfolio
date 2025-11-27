import { useParams } from "react-router"

const Project: React.FC = () => {
    const { name } = useParams()

    return (
        <div>
            <h1>Project {name}</h1>
        </div>
    )
}

export default Project
