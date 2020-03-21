import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const.js';


const ProfileLink = (props) => {
  const {user} = props;
  return (
    <Link
      className="header__nav-link header__nav-link--profile"
      to={user ?
        AppRoute.FAVORITES :
        AppRoute.SIGN_IN
      }
    >
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{user ? user.email : `Sign In`}</span>
    </Link>
  );
};

ProfileLink.propTypes = {
  user: PropTypes.shape({
    'avatar_url': PropTypes.string.isRequired,
    'email': PropTypes.string.isRequired,
    'id': PropTypes.number.isRequired,
    'is_pro': PropTypes.bool.isRequired,
    'name': PropTypes.string.isRequired
  })
};

export default ProfileLink;
