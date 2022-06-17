import ActiveFriends from '../Friends/ActiveFriends';
import style from './Users.module.css';


const Users = () =>  {
    return (
        <div className={style.usersPage}>
            <div className={style.users}>
                Users
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Users;
