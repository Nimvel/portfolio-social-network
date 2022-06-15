import { NavLink } from 'react-router-dom';
import style from './Comrade.module.css';

const Comrade = ({ comradeImg, comradeName, comradeId, lastMessage, ...props }) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/dialogs/${comradeId}`} className={linkActive => linkActive.isActive ? style.active : style.item} >
                <img src={comradeImg} alt="comrade avatar" />
                <span className={style.comrade_name}>
                {comradeName}
                </span>
                <span className={style.last_message}> {lastMessage}</span>
            </NavLink>
        </div>
    )
}

export default Comrade;
