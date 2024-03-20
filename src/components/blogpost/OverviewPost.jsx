import { useParams} from "react-router-dom";
import posts from '../../constants/data.json'

const OverviewPost = () => {
    const {id} = useParams();
    // axios request naar het specifieke id dat word meegegeven als param
    const post = posts.find((post) => {
        return post.id.toString() === id
    })

    return(
        <>
<p>{post.content}</p>
        </>
    )
}


export default OverviewPost;