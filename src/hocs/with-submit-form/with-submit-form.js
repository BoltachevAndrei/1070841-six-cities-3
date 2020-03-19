import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ReviewLength} from '../../utils.js';

const withSubmitForm = (Component) => {
  class WithSubmitForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        review: ``,
        rating: 0,
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
      }, () => this._validateFormdata());
    }

    render() {
      const {isFormdataValid, review, rating} = this.state;
      return (
        <Component
          {...this.props}
          review={review}
          rating={Number.parseInt(rating, 10)}
          isFormdataValid={isFormdataValid}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      );
    }

    _resetForm() {
      this.setState({
        review: ``,
        rating: 0
      }, () => this._validateFormdata());
    }

    _validateFormdata() {
      const {rating, review} = this.state;
      if (review.length >= ReviewLength.MIN && review.length <= ReviewLength.MAX && rating > 0) {
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

  WithSubmitForm.propTypes = {
    id: PropTypes.number.isRequired,
    isPostingComment: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func
  };

  return WithSubmitForm;
};

export default withSubmitForm;
