export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const OFFERS_MOCK = [
  {
    id: 101,
    city: City.AMSTERDAM,
    isPremium: true,
    images: [
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 120,
    isBookmarked: false,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `House`,
      bedrooms: `6 Bedrooms`,
      adults: `Max 7 adults`
    },
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.85309666406198
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
  },
  {
    id: 102,
    city: City.AMSTERDAM,
    isPremium: false,
    images: [
      `img/room.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`
    ],
    price: 80,
    isBookmarked: true,
    rating: 3,
    title: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `Private room`,
      bedrooms: `2 Bedrooms`,
      adults: `Max 3 adults`
    },
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Coffee machine`,
      `Baby seat`,
      `Fridge`
    ],
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isSuper: false
    },
    coordinates: [
      52.369553943508,
      4.85309666406198
    ],
    reviews: [
      {
        id: 202,
        user: {
          name: `Angelina`,
          avatar: `img/avatar-angelina.jpg`,
        },
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4,
        date: new Date(`2018-05-24`)
      }
    ]
  },
  {
    id: 103,
    city: City.AMSTERDAM,
    isPremium: true,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/studio-01.jpg`
    ],
    price: 180,
    isBookmarked: false,
    rating: 3.5,
    title: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `Apartment`,
      bedrooms: `1 Bedrooms`,
      adults: `Max 2 adults`
    },
    inside: [
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Dishwasher`,
      `Fridge`
    ],
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.929309666406198
    ],
    reviews: [
      {
        id: 203,
        user: {
          name: `Angelina`,
          avatar: `img/avatar-angelina.jpg`,
        },
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        rating: 4,
        date: new Date(`2017-06-24`)
      }
    ]
  },
  {
    id: 104,
    city: City.AMSTERDAM,
    isPremium: false,
    images: [
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 90,
    isBookmarked: false,
    rating: 4.5,
    title: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `Apartment`,
      bedrooms: `4 Bedrooms`,
      adults: `Max 5 adults`
    },
    inside: [
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: false
    },
    coordinates: [
      52.3809553943508,
      4.939309666406198
    ],
    reviews: [
      {
        id: 204,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        text: `The building is green and from 18th century.`,
        rating: 4,
        date: new Date(`2016-07-24`)
      },
      {
        id: 205,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        rating: 4,
        date: new Date(`2016-08-24`)
      }
    ]
  },
  {
    id: 201,
    city: City.BRUSSELS,
    isPremium: true,
    images: [
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 200,
    isBookmarked: false,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `House`,
      bedrooms: `6 Bedrooms`,
      adults: `Max 7 adults`
    },
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.85309666406198
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
  },
  {
    id: 301,
    city: City.COLOGNE,
    isPremium: true,
    images: [
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 300,
    isBookmarked: false,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `House`,
      bedrooms: `6 Bedrooms`,
      adults: `Max 7 adults`
    },
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.85309666406198
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
  },
  {
    id: 401,
    city: City.DUSSELDORF,
    isPremium: true,
    images: [
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 400,
    isBookmarked: false,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `House`,
      bedrooms: `6 Bedrooms`,
      adults: `Max 7 adults`
    },
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.85309666406198
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
  },
  {
    id: 501,
    city: City.HAMBURG,
    isPremium: true,
    images: [
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 500,
    isBookmarked: false,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `House`,
      bedrooms: `6 Bedrooms`,
      adults: `Max 7 adults`
    },
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.85309666406198
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
  },
  {
    id: 601,
    city: City.PARIS,
    isPremium: true,
    images: [
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 600,
    isBookmarked: false,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    features: {
      entire: `House`,
      bedrooms: `6 Bedrooms`,
      adults: `Max 7 adults`
    },
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.85309666406198
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
  }
];
