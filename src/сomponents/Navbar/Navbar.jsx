import style from './Navbar.module.css';
import NavigationLink from './NavLink/NavigationLink';

const Navbar = ( {navData, ...props} ) => {
    return (
        <div className={style.navbar}>
            <div className={style.social_network_name}>
                social network name
            </div>
            <div id={style.login_or_profile}>
                login or profile
            </div>
            <div className={style.navigation}>
                <NavigationLink navData={navData} />
            </div>
        </div>
    )
}

export default Navbar;
