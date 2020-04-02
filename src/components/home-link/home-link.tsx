import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

interface Props {
  homeLinkClass?: string;
  homeLinkHeight?: number;
  homeLinkWidth?: number;
  onHomeLinkClick: () => void;
}

const HomeLink: React.FunctionComponent<Props> = (props: Props) => {
  const {
    homeLinkClass,
    homeLinkHeight,
    homeLinkWidth,
    onHomeLinkClick
  } = props;
  return (
    <Link
      className={`${homeLinkClass ? homeLinkClass : `header`}__logo-link`}
      to={AppRoute.MAIN}
      onClick={onHomeLinkClick}
    >
      <img className={`${homeLinkClass ? homeLinkClass : `header`}__logo`} src="/img/logo.svg" alt="6 cities logo" width={`${homeLinkWidth ? homeLinkWidth : `81`}`} height={`${homeLinkHeight ? homeLinkHeight : `41`}`} />
    </Link>
  );
};

export default HomeLink;
