import React from 'react';

const NewPost = ( {newPostText, updateNewPostText, addPost, ...props} ) => {
    let postText = React.createRef();


    let addNewPost = () => {
    let text = postText.current.value;
        addPost(text);
        postText.current.value = '';
    }

    let onTextAreaChanged = () => {
    let text = postText.current.value;
    updateNewPostText(text)
    }

    return (
        <div>
                <textarea placeholder='Enter your post' value={newPostText} ref={postText} onChange={onTextAreaChanged} />
                <button onClick={addNewPost} >add post</button>
        </div>
    )
}

export default NewPost;
