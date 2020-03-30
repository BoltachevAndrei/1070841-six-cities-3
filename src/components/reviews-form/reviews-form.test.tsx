import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewsForm from './reviews-form';
import {doNothing} from '../../utils';

const isPostingComment = false;

const rating = `5`;

const review = ``;

const isFormdataValid = false;

it(`ReviewsForm renders correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsForm
          isPostingComment={isPostingComment}
          rating={rating}
          review={review}
          isFormdataValid={isFormdataValid}
          onSubmit={doNothing}
          onChange={doNothing}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
