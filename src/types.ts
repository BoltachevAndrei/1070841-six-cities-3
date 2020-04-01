export enum SortTypeList {
  POPULAR = `Popular`,
  LOW_TO_HIGH = `Price: low to high`,
  HIGH_TO_LOW = `Price: high to low`,
  TOP_RATED_FIRST = `Top rated first`
};

export enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`
};

export type City = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  name: string
};

export type User = {
  id: number,
  name: string,
  avatar: string,
  isSuper: boolean,
  email?: string
};

export type Offer = {
  id: number,
  city: City,
  isPremium: boolean,
  images: Array<string>,
  price: number,
  isBookmarked: boolean,
  rating: number,
  title: string,
  description: string,
  features: {
    entire: string,
    bedrooms: string,
    adults: string
  },
  goodsInside: Array<string>,
  host: User,
  coordinates: Array<number>,
  zoom: number,
  previewImage: string
};

export type Comment = {
  text: string,
  date: Date,
  id: number,
  rating: number,
  user: User
};
