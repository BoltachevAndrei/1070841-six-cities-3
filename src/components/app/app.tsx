import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state';
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user';
import Main from '../main/main';
import Offer from '../offer/offer';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import NoFavorites from '../no-favorites/no-favorites';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import {getCard, getSortType, getRequestStatus} from '../../reducer/app-state/selectors';
import {getOffers, getOffersByCity, getCitiesList, getCity, getOffersNearby, getComments, getPostingCommentStatus} from '../../reducer/data/selectors';
import {getAuthorizationStatus, getUser} from '../../reducer/user/selectors';
import {Offer as OfferType, City, SortTypeList, User, Comment} from '../../types';

interface Props {
  offers: Array<OfferType>;
  offersByCity: Array<OfferType>;
  city: City;
  citiesList: Array<City>;
  card: number;
  sortType: SortTypeList;
  user: User;
  offersNearby: Array<OfferType>;
  comments: Array<Comment>;
  isPostingComment: boolean;
  authorizationStatus: AuthorizationStatus;
  isRequestSuccess: boolean;
  onPlaceCardClick: () => void;
  onCityClick: () => void;
  onPlaceCardMouseOver: () => void;
  onPlaceCardMouseLeave: () => void;
  onCommentSubmit: () => void;
  onLoginSubmit: () => void;
  toggleIsBookmarked: () => void;
  onHomeLinkClick: () => void;
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {
    offers,
    offersByCity,
    city,
    citiesList,
    card,
    sortType,
    user,
    offersNearby,
    comments,
    isPostingComment,
    authorizationStatus,
    isRequestSuccess,
    onPlaceCardClick,
    onCityClick,
    onPlaceCardMouseOver,
    onPlaceCardMouseLeave,
    onCommentSubmit,
    onLoginSubmit,
    toggleIsBookmarked,
    onHomeLinkClick
  } = props;

  const numberOfPlacesToStay = offers.filter((element) => element.city.name === city.name).length;
  const favorites = offers.filter((element) => element.isBookmarked);

  return (
    <Switch>
      <Route
        exact
        path={AppRoute.MAIN}
        render={() => {
          if (isRequestSuccess) {
            return (
              <Main
                placesCount={numberOfPlacesToStay}
                offers={offersByCity}
                activeCity={city}
                citiesList={citiesList}
                card={card}
                sortType={sortType}
                user={user}
                onPlaceCardClick={onPlaceCardClick}
                onCityClick={onCityClick}
                onPlaceCardMouseOver={onPlaceCardMouseOver}
                onPlaceCardMouseLeave={onPlaceCardMouseLeave}
                onHomeLinkClick={onHomeLinkClick}
              />
            );
          }
          return (
            <Error
              onHomeLinkClick={onHomeLinkClick}
            />
          );
        }}
      />
      <Route
        exact
        path={`${AppRoute.ROOM}/:id`}
        render={(routeProps) => {
          const {id} = routeProps.match.params;
          return (
            <Offer
              id={Number.parseInt(id, 10)}
              offer={offers.find((element) => element.id === Number.parseInt(id, 10))}
              card={card}
              sortType={sortType}
              user={user}
              offersNearby={offersNearby}
              comments={comments}
              onCommentSubmit={onCommentSubmit}
              isPostingComment={isPostingComment}
              toggleIsBookmarked={toggleIsBookmarked}
              onPlaceCardClick={onPlaceCardClick}
              onHomeLinkClick={onHomeLinkClick}
            />
          );
        }}
      />
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => {
          if (favorites.length === 0 && Array.isArray(favorites)) {
            return (
              <NoFavorites
                user={user}
                onHomeLinkClick={onHomeLinkClick}
              />
            );
          }
          return (
            <Favorites
              user={user}
              favorites={favorites}
              onPlaceCardClick={onPlaceCardClick}
              onHomeLinkClick={onHomeLinkClick}
            />
          );
        }}
      />
      <Route
        exact
        path={AppRoute.SIGN_IN}
        render={() => {
          if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
            return (
              <SignIn
                onSubmit={onLoginSubmit}
                onHomeLinkClick={onHomeLinkClick}
              />
            );
          }
          return (
            <Redirect to={AppRoute.FAVORITES} />
          );
        }}
      />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  offersByCity: getOffersByCity(state),
  city: getCity(state),
  citiesList: getCitiesList(state),
  card: getCard(state),
  sortType: getSortType(state),
  user: getUser(state),
  offersNearby: getOffersNearby(state),
  comments: getComments(state),
  isPostingComment: getPostingCommentStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
  isRequestSuccess: getRequestStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceCardClick(id) {
    dispatch(DataOperation.loadOffersNearby(id))
    .then(() => dispatch(DataOperation.loadComments(id)))
    .then(() => dispatch(ActionCreator.changeRequestStatus(true)))
    .then(() => dispatch(ActionCreator.changeCard(id)));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onPlaceCardMouseOver(id) {
    dispatch(ActionCreator.changeCard(id));
  },
  onPlaceCardMouseLeave() {
    dispatch(ActionCreator.changeCard(null));
  },
  onCommentSubmit(id, comment) {
    dispatch(DataOperation.postComment(id, comment))
    .then(() => dispatch(ActionCreator.changeRequestStatus(true)));
  },
  toggleIsBookmarked(id, isBookmarked) {
    dispatch(DataOperation.changeFavoriteStatus({id, isBookmarked: Number(!isBookmarked)}))
    .then(() => dispatch(ActionCreator.changeRequestStatus(true)));
  },
  onLoginSubmit(authData) {
    dispatch(UserOperation.login({
      email: authData.email,
      password: authData.password
    }))
    .then(() => dispatch(DataOperation.loadFavorites()))
    .then(() => dispatch(ActionCreator.changeRequestStatus(true)));
  },
  onHomeLinkClick() {
    dispatch(ActionCreator.changeCard(null));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
