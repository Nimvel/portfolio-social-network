import profile from "../assets/images/profile.png";
import profile_active from "../assets/images/profile_active.png";
import dialogs from "../assets/images/dialogs.png";
import dialogs_active from "../assets/images/dialogs_active.png";
import friends from "../assets/images/friends.png";
import friends_active from "../assets/images/friends_active.png";
import users from "../assets/images/users.png";
import users_active from "../assets/images/users_active.png";

// export const images = {
//     profile,
//     profile_active,
//     dialogs,
//     dialogs_active,
//     friends,
//     friends_active,
//     users,
//     users_active,
// }

// let rerender = () => {
//     console.log('state changed')
// };

let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let store = {
    _state: {
        navData: [
            { id: 1, name: 'profile', },
            { id: 2, name: 'dialogs' },
            { id: 3, name: 'friends' },
            { id: 4, name: 'users' }
        ],
        profilePage: {
            postsData: [
                { id: 1, userImg: profile, message: 'one', likesCount: 0 },
                { id: 2, userImg: friends, message: 'two', likesCount: 4 },
                { id: 3, userImg: users, message: 'three', likesCount: 9 }
            ],
            newPostText: '',
        }
    },
    _callSubscriber() { console.log('state changed') },
    _subscribe(observer) {
        this._callSubscriber = observer; //паттерн
    },

    getState() { return this._state },

    // _addPost(newPostText) {
    //     let newPost = {
    //         id: 4, userImg: dialogs, message: newPostText, likesCount: 0
    //     };
    //     this._state.profilePage.postsData.push(newPost);
    //     this._callSubscriber(this.state)
    // },
    // _updateNewPostText(newPostText) {
    //     this._state.profilePage.newPostText = newPostText;
    //     this._callSubscriber(this.state)
    // },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = { id: 4, userImg: dialogs, message: this._state.profilePage.newPostText, likesCount: 0 };
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });

window.store = store;

export default store;