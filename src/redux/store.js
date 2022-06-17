// import kurapika from '../assets/avatars/kurapika_face.jpg';
// import ladyMaria from '../assets/avatars/lady_Maria_face.jpg';
// import lucifer from '../assets/avatars/lucifer_face.jpg';

// import img_1 from '../assets/images/img_1.jpg';
// import img_2 from '../assets/images/img_2.jpg';
// import img_3 from '../assets/images/img_3.jpg';
// import img_4 from '../assets/images/img_4.jpg';
// import img_5 from '../assets/images/img_5.jpg';
// import img_6 from '../assets/images/img_6.jpg';

import navigationReducer from './navigation-reducer';
import profileReducer from './profile-reducer';
import postsReducer from './posts-reducer';
import dialogsReducer from './dialogs-reducer';
import photosReducer from './photos-reducer';

import { combineReducers, legacy_createStore as createStore } from 'redux';

let reducers = combineReducers({
    navigationPage: navigationReducer ,
    profilePage: profileReducer,
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    photosPage: photosReducer
})

let store = createStore(reducers);


// let store = {
//     _state: {
//         colors: [
//             '#f4f4f4', '#c2c6c5', '#939393', '#c1b0c8', '#715678'
//         ],
//         navData: [
//             { id: 1, name: 'profile' },
//             { id: 2, name: 'posts' },
//             { id: 3, name: 'dialogs' },
//             { id: 4, name: 'friends' },
//             { id: 5, name: 'settings' },
//             { id: 6, name: 'photos' },
//             { id: 7, name: 'users' }
//         ],
//         profilePage: {
//             postsData: [
//                 { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, message: 'The only principle is that there are no principles.', likesCount: 0, isLiked: false },
//                 { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, message: 'Hm... A visitor? How unexpected...', likesCount: 4, isLiked: false },
//                 { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, message: 'Are you offering me chocolate pancakes?', likesCount: 9, isLiked: false }
//             ],
//             newPostText: '',
//         },
//         postsPage: {
//             postsData: [
//                 { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, message: 'The only principle is that there are no principles.', likesCount: 0, isLiked: false },
//                 { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, message: 'Hm... A visitor? How unexpected...', likesCount: 4, isLiked: false },
//                 { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, message: 'Are you offering me chocolate pancakes?', likesCount: 9, isLiked: false }
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             comradesData: [
//                 { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, comradeId: 1, lastMessage: 'The only principle is ....' },
//                 { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, comradeId: 2, lastMessage: 'Hm... A visitor?' },
//                 { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, comradeId: 3, lastMessage: 'Are you offering me...' }
//             ],
//             messagesData: [
//                 { id: 1, comradeId: 1, message: 'The only principle is that there are no principles.' },
//                 { id: 2, comradeId: 2, message: 'Hm... A visitor? How unexpected...' },
//                 { id: 3, comradeId: 3, message: 'Are you offering me chocolate pancakes?' },
//             ],
//             newMessageText: '',
//         },
//         photosPage: [
//             { id: 1, photo: img_1 },
//             { id: 2, photo: img_2 },
//             { id: 3, photo: img_3 },
//             { id: 4, photo: img_4 },
//             { id: 5, photo: img_5 },
//             { id: 6, photo: img_6 }
//         ]
//     },
//     _callSubscriber() { console.log('state changed') },
//     _subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     getState() { return this._state },

//     dispatch(action) {
//         profileReducer(this._state.profilePage, action);
//         postsReducer(this._state.postsPage, action);
//         dialogsReducer(this._state.dialogsPage, action);

//         this._callSubscriber(this._state)
//     }
// }

export default store;

window.store = store;
