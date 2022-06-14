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

let rerender = () => {
    console.log('state changed')
};

let state = {
    navData: [
        { id: 1, name: 'profile',  },
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
}

export const addPost = newPostText => {
    let newPost = {
        id: 4, userImg: dialogs, message: newPostText, likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    rerender(state)
}

export const updateNewPostText = newPostText => {
    state.profilePage.newPostText = newPostText;
    rerender(state)
}

export const subscribe = (observer) => {
    rerender = observer; //паттерн
}

export default state;