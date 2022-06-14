import style from './Navbar.module.css';
import NavigationLink from './NavLink/NavigationLink';

let name = ['profile', 'dialogs', 'friends', 'users']

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.social_network_name}>
                social network name
            </div>
            <div id={style.login_or_profile}>
                login or profile
            </div>
            <div className={style.navigation}>
                <NavigationLink name={name} />
            </div>
        </div>
    )
}

export default Navbar;
