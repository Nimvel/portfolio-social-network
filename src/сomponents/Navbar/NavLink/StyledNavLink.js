import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import profile from "../../../assets/icons/profile.png";
import profile_active from "../../../assets/icons/profile_active.png";
import dialogs from "../../../assets/icons/dialogs.png";
import dialogs_active from "../../../assets/icons/dialogs_active.png";
import friends from "../../../assets/icons/friends.png";
import friends_active from "../../../assets/icons/friends_active.png";
import users from "../../../assets/icons/users.png";
import users_active from "../../../assets/icons/users_active.png";
import settings from "../../../assets/icons/settings.png"
import settings_active from "../../../assets/icons/settings_active.png"
import photo from "../../../assets/icons/photo.png"
import photo_active from "../../../assets/icons/photo_active.png"

let images = {
    profile,
    profile_active,
    dialogs,
    dialogs_active,
    friends,
    friends_active,
    users,
    users_active,
    settings,
    settings_active,
    photo,
    photo_active
}

let size = '50px';
let size_active = '60px';

export const StyledNavLink = styled(NavLink)`
${props => props.name && css`
        position: relative;
        background: url(${images[props.name]});
        display: block;
        background-size: ${size};
        width: ${size};
        height: ${size};
    &:hover {
        background-image: url(${images[props.name + "_active"]});
        background-size: ${size_active};
        width: ${size_active};
        height: ${size_active};
        transform: translate(-5px);
    }
    &.active{
        background-image: url(${images[props.name + "_active"]});
        background-size: ${size};
        width: ${size};
        height: ${size};
    }
    &.active:hover {
        background-size: ${size_active};
        width: ${size_active};
        height: ${size_active};
    }
    `
}`;

