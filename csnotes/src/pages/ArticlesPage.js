import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlesPage = () =>{
    const params = useParams();
    const {articleID} = params;

    const article = articles.find(article => article.name === articleID);

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i )=>(
            <p key={i}>{paragraph}</p>
        ))}
        </>
    );
}


export default ArticlesPage;