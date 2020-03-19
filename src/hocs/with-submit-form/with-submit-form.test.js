import React from 'react';
import renderer from 'react-test-renderer';
import withSubmitForm from './with-submit-form.js';

const id = 1;

const isPostingComment = false;

it(`withSubmitForm renders correctly`, () => {
  const tree = renderer
    .create(
        <withSubmitForm
          id={id}
          isPostingComment={isPostingComment}
          onSubmit={() => {}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
