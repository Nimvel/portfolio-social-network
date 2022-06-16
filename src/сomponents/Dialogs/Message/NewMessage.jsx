import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state';

const NewMessage = ({ newMessageText, dispatch, ...props }) => {
    let messageText = React.createRef();

    let onMessageChange = () => {
        let text = messageText.current.value;
        dispatch(updateNewMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        dispatch(sendMessageActionCreator());
    }

    return (
        <div>
            <textarea ref={messageText} onChange={onMessageChange} value={newMessageText} placeholder='Enter your message' />
            <button onClick={sendMessage} > Send message </button>
        </div>
    )
}

export default NewMessage;
