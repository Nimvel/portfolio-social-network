import style from '../Navbar.module.css';
import { StyledNavLink } from './StyledNavLink';

const NavigationLink = ({ navData, ...props }) => {

    let navLinkElements = navData.map(n =>
        <div className={style[n.name]}>
            <StyledNavLink to={`/${n.name}`} key={n.id} name={n.name} />
        </div>)

    return (
        <div className={style.navigation}>
            {navLinkElements}
        </div>
    )
}

export default NavigationLink;