import { useParams } from "react-router-dom"

const Article = () => {
    const params = useParams();

    return <div>article id: {params.id}</div>
}

export default Article;