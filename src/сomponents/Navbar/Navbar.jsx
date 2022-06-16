import style from './Navbar.module.css';
import NavigationLink from './NavLink/NavigationLink';
import logo from '../../assets/icons/logo.png';

const Navbar = ({ navData, ...props }) => {
    return (
        <div className={style.navbar}>
            <div className={style.denomination}>
                <div className={style.logo}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={style.social_network_name}> Name
                    <div className={style.social_network}>
                        social network
                    </div>
                </div>
            </div>
            <div className={style.login_or_profile}>
                login or profile
            </div>
            <NavigationLink navData={navData} />
        </div>
    )
}

export default Navbar;
