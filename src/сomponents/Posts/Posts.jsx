import ActiveFriends from "../Friends/ActiveFriends";
import NewPost from "./Post/NewPost";
import Post from "./Post/Post";

import style from './Posts.module.css';

const Posts = ({ postsPage, dispatch, ...props }) => {
    let postsElements = postsPage.postsData.map(p =>
        <Post key={p.id} id={p.id} dispatch={dispatch} comradeImg={p.comradeImg} comradeName={p.comradeName} message={p.message} likes={p.likesCount} />)

    return (
        <div className={style.postsPage}>
            <div className={style.posts}>
                    <NewPost
                        newPostText={postsPage.newPostText}
                        dispatch={dispatch} />
                    {postsElements}
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Posts;