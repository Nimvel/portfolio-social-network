import { likeActionCreator } from '../../../redux/posts-reducer';
import Post from './Post';

const PostContainer = ({ postsData, dispatch}) => {
    let like = (id) => {
        dispatch(likeActionCreator(id));
    }

    let postsElements = postsData.map(p => <Post 
        key={p.id} id={p.id} like={like}
        comradeImg={p.comradeImg} comradeName={p.comradeName} 
        message={p.message} likes={p.likesCount} />)

    return postsElements
}

export default PostContainer;