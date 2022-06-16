import Post from "./Post/Post";
import style from './Posts.module.css';

const Posts = ( {posts, dispatch, ...props} ) => {
    let postsElements = posts.map( p => 
    <Post key={p.id} id={p.id} dispatch={dispatch} comradeImg={p.comradeImg} comradeName={p.comradeName} message={p.message} likes={p.likesCount} />)

    return (
        <div className={style.posts} >
                {postsElements}
        </div>
    )
}

export default Posts;