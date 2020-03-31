import * as React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {Comment} from '../../types';

const REVIEWS_TO_SHOW_LIMIT = 10;

interface Props {
  reviews: Array<Comment>;
}

const ReviewsList: React.FunctionComponent<Props> = (props: Props) => {
  const {reviews} = props;
  const sortedReviews = reviews.slice(0, REVIEWS_TO_SHOW_LIMIT).sort((prev, next) => Date.parse((next.date).toString()) - Date.parse((prev.date).toString()));
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => {
          return (
            <ReviewsItem key={review.id} review={review}/>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ReviewsList;
