let SEND_MESSAGE = 'SEND_MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
                let newMessage = { id: 4, comradeId: 3, message: state.newMessageText }
                state.messagesData.push(newMessage);
                state.newMessageText = '';
                return state;

            case UPDATE_NEW_MESSAGE_TEXT:
                state.newMessageText = action.newMessageText;
                return state;
    }
}

export default dialogsReducer;

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text });