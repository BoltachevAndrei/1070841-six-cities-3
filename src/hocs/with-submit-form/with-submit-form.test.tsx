import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withSubmitForm from './with-submit-form';
import {doNothing} from '../../utils';

const id = 1;

const isPostingComment = false;

interface MockComponentProps {
  children: React.ReactNode;
}

const MockComponent = (props: MockComponentProps) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withSubmitForm(MockComponent);

it(`withSubmitForm renders correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        id={id}
        isPostingComment={isPostingComment}
        onSubmit={doNothing}
      />
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
