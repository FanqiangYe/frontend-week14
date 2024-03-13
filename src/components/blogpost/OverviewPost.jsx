import { useParams} from "react-router-dom";

const OverviewPost = () => {
    const {id} = useParams();
    // axios request naar het specifieke id dat word meegegeven als param
    return(
        <>
        <p>Blogpost {id}</p>
        </>
    )
}


export default OverviewPost;