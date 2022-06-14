import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import profile from "../../../assets/images/profile.png";
import profile_active from "../../../assets/images/profile_active.png";
import dialogs from "../../../assets/images/dialogs.png";
import dialogs_active from "../../../assets/images/dialogs_active.png";
import friends from "../../../assets/images/friends.png";
import friends_active from "../../../assets/images/friends_active.png";
import users from "../../../assets/images/users.png";
import users_active from "../../../assets/images/users_active.png";

let images = {
    profile,
    profile_active,
    dialogs,
    dialogs_active,
    friends,
    friends_active,
    users,
    users_active,
}

let size = '50px';
let size_active = '80px';


export const StyledNavLink = styled(NavLink)`
${props => props.name && css`
        position: relative;
        background: url(${images[props.name]});
        display: block;
        background-size: ${size};
        width: ${size};
        height: ${size};
    &:hover {
        background-image: url(${images[props.name+"_active"]});
        background-size: ${size_active};
        width: ${size_active};
        height: ${size_active};
    }
    .active{
        background-image: url(${images[props.name+"_active"]});
        background-size: ${size};
        width: ${size};
        height: ${size};
    }
    .active:hover {
        background-size: ${size_active};
        width: ${size_active};
        height: ${size_active};
    }
    `}
    `;