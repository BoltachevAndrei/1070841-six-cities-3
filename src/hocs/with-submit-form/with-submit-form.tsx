import * as React from 'react';
import {Subtract} from "utility-types";
import {ReviewLength} from '../../const';

interface State {
  review: string;
  rating: string;
  isFormdataValid: boolean;
}

interface Props {
  id: number;
  isPostingComment: boolean;
  onSubmit: (id: number, {}) => void;
}

interface InjectingProps {
  onChange: () => void;
}

const withSubmitForm = (Component) => {
  type P = React.ComponentProps<typeof Component>
  type T = Props & Subtract<P, InjectingProps>;

  class WithSubmitForm extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {
        review: ``,
        rating: ``,
        isFormdataValid: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
      const {id, onSubmit} = this.props;
      evt.preventDefault();
      onSubmit(id, {
        comment: this.state.review,
        rating: Number.parseInt(this.state.rating, 10)
      });
      this._resetForm();
    }

    handleChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      } as State, () => this._validateFormdata());
    }

    render() {
      const {isFormdataValid, review, rating} = this.state;
      return (
        <Component
          {...this.props}
          review={review}
          rating={rating}
          isFormdataValid={isFormdataValid}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      );
    }

    _resetForm() {
      this.setState({
        review: ``,
        rating: ``
      }, () => this._validateFormdata());
    }

    _validateFormdata() {
      const {rating, review} = this.state;
      if (review.length >= ReviewLength.MIN && review.length <= ReviewLength.MAX && Number.parseInt(rating, 10) > 0) {
        this.setState({
          isFormdataValid: true
        });
      } else {
        this.setState({
          isFormdataValid: false
        });
      }
    }
  }

  return WithSubmitForm;
};

export default withSubmitForm;
