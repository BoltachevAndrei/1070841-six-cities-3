import {extend} from "../../utils";

const convertOfferToState = (response) => ({
  id: response.id,
  city: response.city,
  isPremium: response.is_premium,
  images: response.images,
  price: response.price,
  isBookmarked: response.is_favorite,
  rating: response.rating,
  title: response.title,
  description: response.description,
  features: {
    entire: response.type,
    bedrooms: response.bedrooms.toString(),
    adults: response.max_adults.toString()
  },
  goodsInside: response.goods,
  host: {
    id: response.id,
    name: response.host.name,
    avatar: response.host.avatar_url,
    isSuper: response.host.is_pro
  },
  coordinates: [
    response.location.latitude,
    response.location.longitude
  ],
  zoom: response.location.zoom,
  previewImage: response.preview_image
});

const convertCommentToState = (response) => ({
  text: response.comment,
  date: new Date(response.date),
  id: response.id,
  rating: response.rating,
  user: {
    avatar: response.user.avatar_url,
    name: response.user.name,
    id: response.user.id,
    isPro: response.user.is_pro
  }
});

const initialState = {
  comments: [],
  offers: [],
  offersNearby: [],
  isPostingComment: false
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  POST_COMMENT: `POST_COMMENT`,
  CHANGE_POSTING_COMMENT_STATUS: `CHANGE_POSTING_COMMENT_STATUS`
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadOffersNearby: (offersNearby) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offersNearby
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),
  changeFavoriteStatus: (offer) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: offer
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  postComment: (comment) => ({
    type: ActionType.POST_COMMENT,
    payload: comment
  }),
  changePostingCommentStatus: (isPostingComment) => ({
    type: ActionType.CHANGE_POSTING_COMMENT_STATUS,
    payload: isPostingComment
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data.map((data) => convertOfferToState(data))));
      });
  },
  loadOffersNearby: (offer) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offer}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadOffersNearby(response.data.map((data) => convertOfferToState(data))));
      });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data.map((data) => convertOfferToState(data))));
      });
  },
  changeFavoriteStatus: (offer) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offer.id}/${offer.isBookmarked}`)
      .then((response) => {
        dispatch(ActionCreator.changeFavoriteStatus(convertOfferToState(response.data)));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data.map((data) => convertCommentToState(data))));
      });
  },
  postComment: (id, comment) => (dispatch, getState, api) => {
    return new Promise((resolve) => {
      dispatch(ActionCreator.changePostingCommentStatus(true));
      resolve();
    })
      .then(() => api.post(`/comments/${id}`, comment))
      .then((response) => {
        dispatch(ActionCreator.postComment(response.data.map((data) => convertCommentToState(data))));
      })
      .then(() => dispatch(ActionCreator.changePostingCommentStatus(false)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {offersNearby: action.payload});
    case ActionType.LOAD_FAVORITES:
      const withFavorites = state.offers.map((elementA) => action.payload.findIndex((elementB) => elementA.id === elementB.id) < 0 ? elementA : action.payload[action.payload.findIndex((elementB) => elementA.id === elementB.id)]);
      return extend(state, {offers: withFavorites});
    case ActionType.CHANGE_FAVORITE_STATUS:
      const withFavorite = state.offers.map((elementA) => action.payload.id === elementA.id ? action.payload : elementA);
      return extend(state, {offers: withFavorite});
    case ActionType.LOAD_COMMENTS:
      return extend(state, {comments: action.payload});
    case ActionType.POST_COMMENT:
      return extend(state, {comments: action.payload});
    case ActionType.CHANGE_POSTING_COMMENT_STATUS:
      return extend(state, {isPostingComment: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
