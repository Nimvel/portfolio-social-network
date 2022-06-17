import React from 'react';
import style from './NewPost.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';

const NewPost = ( {newPostText, dispatch, ...props} ) => {
    let onPostChange = (e) => {
        let text = e.target.value;
        dispatch(updateNewPostTextActionCreator(text))
        }
        
    let addNewPost = () => {
        dispatch(addPostActionCreator());
    }

    return (
        <div className={style.new_post} >
                <textarea placeholder='Enter your post' value={newPostText} onChange={onPostChange} />
                <button onClick={addNewPost} >add post</button>
        </div>
    )
}

export default NewPost;
