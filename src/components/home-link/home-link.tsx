import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

interface Props {
  homeLinkClass?: string;
  height?: string;
  width?: string;
}

const HomeLink: React.FunctionComponent<Props> = (props: Props) => {
  const {homeLinkClass, height, width} = props;
  return (
    <Link
      className={`${homeLinkClass ? homeLinkClass : `header`}__logo-link`}
      to={AppRoute.MAIN}
    >
      <img className={`${homeLinkClass ? homeLinkClass : `header`}__logo`} src="/img/logo.svg" alt="6 cities logo" width={`${width ? width : `81`}`} height={`${height ? height : `41`}`} />
    </Link>
  );
};

export default HomeLink;
