import style from '../Navbar.module.css';
import { StyledNavLink } from './StyledNavLink';

const NavigationLink = (props) => {

    let navLinkElements = props.name.map(n => <StyledNavLink to={`/${n}`} name={n} /> )

    return (
            <div className={style.navigation_wrapper}>
                {navLinkElements}
            </div>
    )
}

export default NavigationLink;