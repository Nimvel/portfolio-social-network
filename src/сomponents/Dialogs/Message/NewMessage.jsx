import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import style from '../Dialogs.module.css';

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
            <textarea className={style.messageText} onChange={onMessageChange} value={newMessageText} placeholder='Enter your message' />
            <button className={style.send} onClick={sendMessage}>send</button>
        </div>
    )
}

export default NewMessage;
