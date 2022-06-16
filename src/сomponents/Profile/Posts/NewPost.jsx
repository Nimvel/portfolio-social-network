import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const NewPost = ( {newPostText, dispatch, ...props} ) => {
    let postText = React.createRef();

    let onPostChange = () => {
        let text = postText.current.value;
        dispatch(updateNewPostTextActionCreator(text))
        }
        
    let addNewPost = () => {
        dispatch(addPostActionCreator());
    }

    return (
        <div>
                <textarea placeholder='Enter your post' value={newPostText} ref={postText} onChange={onPostChange} />
                <button onClick={addNewPost} >add post</button>
        </div>
    )
}

export default NewPost;
