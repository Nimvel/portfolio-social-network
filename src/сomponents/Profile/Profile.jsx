import NewPost from "./Posts/NewPost";
import Posts from "./Posts/Posts";

const Profile = ( {profilePage, updateNewPostText, addPost, ...props} ) => {
    return (
        <div>
            <div>
                Posts
            </div>
            <div>
                <NewPost 
                newPostText={profilePage.newPostText} 
                updateNewPostText={updateNewPostText} 
                addPost={addPost} />
            </div>
            <div>
                <Posts 
                posts={profilePage.postsData} />
            </div>
        </div>
    )
}

export default Profile;
