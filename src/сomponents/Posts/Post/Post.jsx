import style from '../Posts.module.css';

const Post = ({ like, comradeImg, comradeName, message, likes, id, ...props }) => {
    let onClick = () => {
        like(id);
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
                <span onClick={onClick}>Likes {likes}</span>
            </div>
        </div>
    )
}

export default Post;