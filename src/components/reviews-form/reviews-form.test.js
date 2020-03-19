import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsForm from './reviews-form.jsx';

const id = 1;

const isPostingComment = false;

const rating = 5;

const review = ``;

const isFormdataValid = false;

it(`ReviewsForm renders correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsForm
          id={id}
          isPostingComment={isPostingComment}
          rating={rating}
          review={review}
          isFormdataValid={isFormdataValid}
          onSubmit={() => {}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
