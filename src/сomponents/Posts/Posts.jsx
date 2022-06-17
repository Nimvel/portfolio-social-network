import ActiveFriends from "../Friends/ActiveFriends";
import NewPostContainer from "./Post/NewPostContainer";
import PostContainer from "./Post/PostContainer";

import style from './Posts.module.css';

const Posts = ({ postsPage, dispatch, ...props }) => {
    return(
        <div className={style.postsPage}>
            <div className={style.posts}>
                <NewPostContainer
                    newPostText={postsPage.newPostText}
                    dispatch={dispatch} />
                <PostContainer
                    postsData={postsPage.postsData}
                    dispatch={dispatch}
                />
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Posts;