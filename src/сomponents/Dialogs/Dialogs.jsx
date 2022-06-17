// import { Route, Routes } from "react-router-dom";

import style from './Dialogs.module.css';
import Comrade from './Comrade/Comrade';
import Message from './Message/Message';
import NewMessage from "./Message/NewMessage";

const Dialogs = ({ dialogsPage, dispatch, ...props }) => {

    let comradesElements = dialogsPage.comradesData.map(c =>
        <Comrade comradeImg={c.comradeImg} comradeName={c.comradeName} comradeId={c.comradeId} lastMessage={c.lastMessage} key={c.id} />);

    let messagesElements = dialogsPage.messagesData.map(m =>
        // <Route path={`/dialogs/${m.comradeId}`} element={
        <Message message={m.message} key={m.id} />)
    // } />;

    return (
        <div className={style.dialogs}>
            <div className={style.comrades}>
                {comradesElements}
            </div>
            <div className={style.messages}>
                {/* <Routes> */}
                {messagesElements}
                {/* </Routes> */}
                <div className={style.new_message}>
                    <NewMessage dispatch={dispatch} newMessageText={dialogsPage.newMessageText} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
