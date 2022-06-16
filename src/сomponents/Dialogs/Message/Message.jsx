import style from './../Dialogs.module.css';

const Message = ( {message, ...props}) =>  {
    return (
        <div className={style.message}>
            {message}
        </div>
    )
}

export default Message;
