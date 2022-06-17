import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/posts-reducer';
import style from './NewPost.module.css';

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
                <button className={style.pulsing} onClick={addNewPost} >add post</button>
        </div>
    )
}

export default NewPost;
