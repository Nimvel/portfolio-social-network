import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const NewPost = ( {newPostText, dispatch, ...props} ) => {
    let postText = React.createRef();

    let addNewPost = () => {
        dispatch(addPostActionCreator());
    }

    let onTextAreaChanged = () => {
    let text = postText.current.value;
    dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div>
                <textarea placeholder='Enter your post' value={newPostText} ref={postText} onChange={onTextAreaChanged} />
                <button onClick={addNewPost} >add post</button>
        </div>
    )
}

export default NewPost;
