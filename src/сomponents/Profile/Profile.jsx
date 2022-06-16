import NewPost from "./Posts/Post/NewPost";
import Posts from "./Posts/Posts";

const Profile = ( {profilePage, dispatch, ...props} ) => {
    return (
        <div>
            <div>
                <NewPost 
                newPostText={profilePage.newPostText} 
                dispatch={dispatch} />
            </div>
            <div>
                <Posts 
                posts={profilePage.postsData}
                dispatch={dispatch} />
            </div>
        </div>
    )
}

export default Profile;
