import React from 'react';
import Offer from './offer.jsx';
import renderer from 'react-test-renderer';

jest.mock(`../map/map.jsx`);

const listClass = `near-places__list places__list`;
const cardClass = `near-places__card place-card`;

const offer = {
  id: 777,
  city: `Test city 1`,
  isPremium: true,
  images: [
    `img/amsterdam.jpg`
  ],
  price: 111,
  isBookmarked: false,
  rating: 3,
  title: `Test title`,
  description: `Test description`,
  features: {
    entire: `Palace`,
    bedrooms: `33 Bedrooms`,
    adults: `Max 55 adults`
  },
  inside: [
    `MiniBar`
  ],
  user: {
    name: `Ivan`,
    avatar: `img/avatar.svg`,
    isSuper: true
  },
  reviews: [
    {
      id: 201,
      user: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
      },
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      rating: 3,
      date: new Date(`2019-04-24`)
    }
  ]
};

const offers = [
  {
    id: 778,
    city: `Test city 2`,
    isPremium: false,
    images: [
      `img/room.jpg`
    ],
    price: 80,
    isBookmarked: true,
    rating: 3,
    title: `Wood and stone place`,
    description: `Test description`,
    features: {
      entire: `Private room`,
      bedrooms: `33 Bedrooms`,
      adults: `Max 55 adults`
    },
    inside: [
      `MiniBar`
    ],
    user: {
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    reviews: [
      {
        id: 201,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`,
        },
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        date: new Date(`2019-04-24`)
      }
    ]
  },
  {
    id: 779,
    city: `Test city 3`,
    isPremium: false,
    images: [
      `img/apartment-02.jpg`
    ],
    price: 132,
    isBookmarked: false,
    rating: 3,
    title: `Canal View Prinsengracht`,
    description: `Test description`,
    features: {
      entire: `Apartment`,
      bedrooms: `33 Bedrooms`,
      adults: `Max 55 adults`
    },
    inside: [
      `MiniBar`
    ],
    user: {
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    reviews: [
      {
        id: 201,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`,
        },
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        date: new Date(`2019-04-24`)
      }
    ]
  },
  {
    id: 780,
    city: `Test city 4`,
    isPremium: false,
    images: [
      `img/apartment-03.jpg`
    ],
    price: 180,
    isBookmarked: false,
    rating: 3,
    title: `Nice, cozy, warm big bed apartment`,
    description: `Test description`,
    features: {
      entire: `Apartment`,
      bedrooms: `33 Bedrooms`,
      adults: `Max 55 adults`
    },
    inside: [
      `MiniBar`
    ],
    user: {
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    reviews: [
      {
        id: 201,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`,
        },
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        date: new Date(`2019-04-24`)
      }
    ]
  },
];

it(`Offer renders correctly`, () => {
  const tree = renderer
    .create(<Offer
      offer={offer}
      offers={offers}
      listClass={listClass}
      cardClass={cardClass}
      wrapperClass="near-places__image-wrapper place-card__image-wrapper"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
