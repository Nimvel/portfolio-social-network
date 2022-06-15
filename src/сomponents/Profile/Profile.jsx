import NewPost from "./Posts/NewPost";
import Posts from "./Posts/Posts";

const Profile = ( {profilePage, dispatch, ...props} ) => {
    return (
        <div>
            <div>
                Posts
            </div>
            <div>
                <NewPost 
                newPostText={profilePage.newPostText} 
                dispatch={dispatch} />
            </div>
            <div>
                <Posts 
                posts={profilePage.postsData} />
            </div>
        </div>
    )
}

export default Profile;
