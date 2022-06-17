import React from 'react';
import style from '../Dialogs.module.css';

const NewMessage = ( {onMessageChange, sendMessage, newMessageText} ) => {
    let onChange = (e) => {
        let text = e.target.value;
        onMessageChange(text);
    }

    let onClick = () => {
        sendMessage();
    }

    return (
        <div>
            <textarea className={style.messageText} onChange={onChange} value={newMessageText} placeholder='Enter your message' />
            <button className={style.send} onClick={onClick}>send</button>
        </div>
    )
}

export default NewMessage;
