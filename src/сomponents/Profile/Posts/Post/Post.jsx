import style from './Post.module.css';

const Post = ( {img, message, likes, ...props} ) => {
    return (
        <div className={style.post}>
                <img src={img} alt="user avatar" />
                {message}
                <div>
                    <span>Likes</span> {likes}
                </div>
        </div>
    )
}

export default Post;