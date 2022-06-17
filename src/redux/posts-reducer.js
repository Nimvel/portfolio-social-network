import comrade from '../assets/icons/comrade.png';

let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let LIKE = 'LIKE';

const postsReducer = (state, action) => {
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
            let id;
            for (let i = 0; i < state.postsData.length; i++) {
                if (state.postsData[i].id === action.id) id = i;
            }
            if (!state.postsData[id].isLiked) {
                state.postsData[id].likesCount++;
                state.postsData[id].isLiked = true;
            }
            return state;
    }
}

export default postsReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const likeActionCreator = (id) => ({ type: LIKE, id });