import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/posts-reducer';
import NewPost from './NewPost';

const NewPostContainer = ( {newPostText, dispatch, ...props} ) => {
    let onPostChange = (text) => {
        dispatch(updateNewPostTextActionCreator(text))
        }
        
    let addNewPost = () => {
        dispatch(addPostActionCreator());
    }

    return <NewPost onPostChange={onPostChange} addNewPost={addNewPost} newPostText={newPostText} />
}

export default NewPostContainer;
