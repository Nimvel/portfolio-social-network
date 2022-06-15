import Comrade from './Comrade/Comrade';
import Messages from './Messages/Messages';


const Dialogs = ({ dialogsPage, ...props }) => {
    let comradesElements = dialogsPage.comradesData.map(c =>
        <Comrade comradeImg={c.comradeImg} comradeName={c.comradeName} comradeId={c.comradeId} lastMessage={c.lastMessage} key={c.id} />)
    return (
        <div>
            {comradesElements}
            <Messages messagesData={dialogsPage.messagesData} newMessageText={dialogsPage.newMessageText} />
        </div>
    )
}

export default Dialogs;
