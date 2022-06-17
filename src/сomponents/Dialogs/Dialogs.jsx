import style from './Dialogs.module.css';
import Comrade from './Comrade/Comrade';
import Message from './Message/Message';
import NewMessageContainer from './Message/NewMessageContainer';

const Dialogs = ( {dialogsPage, dispatch} ) => {

    let comradesElements = dialogsPage.comradesData.map(c =>
        <Comrade comradeImg={c.comradeImg} comradeName={c.comradeName} comradeId={c.comradeId} lastMessage={c.lastMessage} key={c.id} />);

    let messagesElements = dialogsPage.messagesData.map(m =>
        <Message message={m.message} key={m.id} />)

    return (
        <div className={style.dialogs}>
            <div className={style.comrades}>
                {comradesElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.new_message}>
                    <NewMessageContainer dispatch={dispatch} newMessageText={dialogsPage.newMessageText} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
