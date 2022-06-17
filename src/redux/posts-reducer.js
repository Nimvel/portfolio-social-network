
import kurapika from '../assets/avatars/kurapika_face.jpg';
import ladyMaria from '../assets/avatars/lady_Maria_face.jpg';
import lucifer from '../assets/avatars/lucifer_face.jpg';
import comrade from '../assets/icons/comrade.png';


let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let LIKE = 'LIKE';

let initialState = {
    postsData: [
        { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, message: 'The only principle is that there are no principles.', likesCount: 0, isLiked: false },
        { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, message: 'Hm... A visitor? How unexpected...', likesCount: 4, isLiked: false },
        { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, message: 'Are you offering me chocolate pancakes?', likesCount: 9, isLiked: false }
    ],
    newPostText: '',
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 4, comradeName: 'User', comradeImg: comrade, message: state.newPostText, likesCount: 0 };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;

        case LIKE:
            let idLike;
            for (let i = 0; i < state.postsData.length; i++) {
                if (state.postsData[i].id === action.id) idLike = i;
            }
            if (!state.postsData[idLike].isLiked) {
                state.postsData[idLike].likesCount++;
                state.postsData[idLike].isLiked = true;
            }
            else {
                state.postsData[idLike].likesCount--;
                state.postsData[idLike].isLiked = false;
            }
            return state;

        default:
            return state;
    }
}

export default postsReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const likeActionCreator = (id) => ({ type: LIKE, id });