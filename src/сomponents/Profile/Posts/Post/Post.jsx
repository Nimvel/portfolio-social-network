import { likeActionCreator } from '../../../../redux/profile-reducer';
import style from '../../Profile.module.css';

const Post = ({ dispatch, comradeImg, comradeName, message, likes, id, ...props }) => {
    let like = () => {
        dispatch(likeActionCreator(id));
    }

    return (
        <div className={style.post}>
            <img src={comradeImg} className={style.comrade_img} alt='user avatar' />
            <div className={style.comrade_name}>
                {comradeName}
            </div>
            <div className={style.comrade_message}>
                {message}
            </div>
            <div className={style.likes}>
                <span onClick={like}>Likes {likes}</span>
            </div>
        </div>
    )
}

export default Post;