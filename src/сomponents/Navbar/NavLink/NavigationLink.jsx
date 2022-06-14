import style from '../Navbar.module.css';
import { StyledNavLink } from './StyledNavLink';

const NavigationLink = ( {navData, ...props} ) => {

    let navLinkElements = navData.map(n => <StyledNavLink to={`/${n.name}`} key={n.id} name={n.name} /> )

    return (
            <div className={style.navigation_wrapper}>
                {navLinkElements}
            </div>
    )
}

export default NavigationLink;