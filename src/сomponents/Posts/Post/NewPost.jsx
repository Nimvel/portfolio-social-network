import React from 'react';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/posts-reducer';
import style from './NewPost.module.css';

const NewPost = ( {onPostChange, addNewPost, newPostText} ) => {
    let onChange = (e) => {
        let text = e.target.value;
        onPostChange(text)
        }
        
    let onClick = () => {
        addNewPost();
    }

    return (
        <div className={style.new_post} >
                <textarea placeholder='Enter your post' value={newPostText} onChange={onChange} />
                <button onClick={onClick} >add post</button>
        </div>
    )
}

export default NewPost;
