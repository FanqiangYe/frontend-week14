import './Overview.css';
import posts from '../../constants/data.json'
import {Link} from 'react-router-dom'

function Overview() {
    console.log(posts)
    return(
        <>
    <h1>OVERVIEW</h1>
        <h2>Bekijke alle {posts.length} posts</h2>
            <ul>
                {posts.map((post) => {
                    return <li>
                        <p>
                            <Link className={"post-link"}
                                  to={`/blog-overview/${post.id}`}> {post.title}</Link> ({post.author})
                        </p>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </li>
                })}
            </ul>
        </>
    );
}

export default Overview;


// De Smaken van Italië (Anna de Kok)
// 12 reacties - 8 keer gedeeld