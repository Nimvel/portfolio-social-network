import ActiveFriends from "../Friends/ActiveFriends";
import NewPost from "./Posts/Post/NewPost";
import Posts from "./Posts/Posts";
import style from './Profile.module.css';

const Profile = ({ profilePage, dispatch, ...props }) => {
    return (
        <div className={style.postsPage}>
            <div className={style.posts}>
                    <NewPost
                        newPostText={profilePage.newPostText}
                        dispatch={dispatch} />
                    <Posts
                        posts={profilePage.postsData}
                        dispatch={dispatch} />
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Profile;
