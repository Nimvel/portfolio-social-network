import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state';

const NewMessage = ({ newMessageText, dispatch, ...props }) => {

    let onMessageChange = (e) => {
        let text = e.target.value;
        dispatch(updateNewMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        dispatch(sendMessageActionCreator());
    }

    return (
        <div>
            <textarea onChange={onMessageChange} value={newMessageText} placeholder='Enter your message' />
            <button onClick={sendMessage} > Send message </button>
        </div>
    )
}

export default NewMessage;
