import comrade from "../assets/icons/comrade.png";
import kurapika from "../assets/avatars/kurapika_face.jpg";
import ladyMaria from "../assets/avatars/lady_Maria_face.jpg";
import lucifer from "../assets/avatars/lucifer_face.jpg";

let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let SEND_MESSAGE = 'SEND_MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
    _state: {
        colors: [
            '#f4f4f4', '#c2c6c5', '#939393', '#c1b0c8','#715678'
        ],
        navData: [
            { id: 1, name: 'profile', },
            { id: 2, name: 'dialogs' },
            { id: 3, name: 'friends' },
            { id: 4, name: 'settings' },
            { id: 5, name: 'photo' },
            { id: 6, name: 'users' }
        ],
        profilePage: {
            postsData: [
                { id: 1, userImg: comrade, message: 'one', likesCount: 0 },
                { id: 2, userImg: comrade, message: 'two', likesCount: 4 },
                { id: 3, userImg: comrade, message: 'three', likesCount: 9 }
            ],
            newPostText: '',
        },
        dialogsPage: {
            comradesData: [
                { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, comradeId: 1, lastMessage: 'The only principle is ....' },
                { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, comradeId: 2, lastMessage: 'Hm... A visitor?' },
                { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, comradeId: 3, lastMessage: 'Are you offering me...' }
            ],
            messagesData: [
                { id: 1, comradeId: 1, message: 'The only principle is that there are no principles.' },
                { id: 2, comradeId: 2, message: 'Hm... A visitor? How unexpected...' },
                { id: 3, comradeId: 3, message: 'Are you offering me chocolate pancakes?' },
            ],
            newMessageText: '',
        }
    },
    _callSubscriber() { console.log('state changed') },
    _subscribe(observer) {
        this._callSubscriber = observer; //паттерн
    },

    getState() { return this._state },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = { id: 4, userImg: comrade, message: this._state.profilePage.newPostText, likesCount: 0 };
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber(this._state)
                break;

            case SEND_MESSAGE:
                let newMessage = {id: 4, comradeId: 3, message: this._state.dialogsPage.newMessageText }
                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._callSubscriber(this._state);
                break;
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text });

window.store = store;

export default store;