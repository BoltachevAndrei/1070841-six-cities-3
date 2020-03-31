import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {User} from '../../types';

interface Props {
  user?: User;
}

const ProfileLink: React.FunctionComponent<Props> = (props: Props) => {
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

export default ProfileLink;
