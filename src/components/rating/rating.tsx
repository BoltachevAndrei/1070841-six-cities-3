import * as React from 'react';

const MAX_RATING = 5;

interface Props {
  rating: number;
  type: string;
}

const Rating: React.FunctionComponent<Props> = (props: Props) => {
  const {rating, type} = props;
  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={{width: `${rating * 100 / MAX_RATING}%`}}></span>
        <span className="visually-hidden">{rating}</span>
      </div>
      {type === `property` &&
        <span className="property__rating-value rating__value">{rating}</span>
      }
    </div>
  );
};

export default Rating;
