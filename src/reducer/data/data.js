import {extend} from "../../utils";

const convertJsonToState = (response) => ({
  id: response.id,
  city: response.city.name,
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
  inside: response.goods,
  user: {
    name: response.host.name,
    avatar: response.host.avatar_url,
    isSuper: response.host.is_pro
  },
  coordinates: [
    response.location.latitude,
    response.location.longitude
  ],
  reviews: [
    {
      id: 201,
      user: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`
      },
      text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      rating: 4,
      date: new Date(`2019-04-24`)
    }
  ]
});

const initialState = {
  offers: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data.map((data) => convertJsonToState(data))));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
