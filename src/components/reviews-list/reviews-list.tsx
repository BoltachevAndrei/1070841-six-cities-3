import * as React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {Comment} from '../../types';

interface Props {
  reviews: Array<Comment>;
}

const ReviewsList: React.FunctionComponent<Props> = (props: Props) => {
  const {reviews} = props;
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <ReviewsItem key={review.id} review={review}/>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ReviewsList;
