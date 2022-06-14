import Post from "./Post/Post";

const Posts = ( {posts, ...props} ) => {
    let postsElements = posts.map( p => <Post key={p.id} img={p.userImg} message={p.message} likes={p.likesCount} />)
    return (
        <div>
                {postsElements}
        </div>
    )
}

export default Posts;