import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import NewMessage from './NewMessage';

const NewMessageContainer = ( {newMessageText, dispatch} ) => {
    let onMessageChange = (text) => {
        dispatch(updateNewMessageTextActionCreator(text));
    }
    let sendMessage = () => {
        dispatch(sendMessageActionCreator());
    }

    return <NewMessage sendMessage={sendMessage} onMessageChange={onMessageChange} newMessageText={newMessageText} />
}

export default NewMessageContainer;
