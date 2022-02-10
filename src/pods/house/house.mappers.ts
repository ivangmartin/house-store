import * as model from 'dals';
import { Review } from 'dals';
import * as apiModel from './house.api-model';


const mapReviewsFromModelToApi = (review: model.Review): apiModel.Review => ({
  _id: review._id,
  date: review.date.toISOString(),
  reviewer_name: review.reviewer_name,
  comments: review.comments,
});

const mapListReviewsFromModelToApi = (reviewList: model.Review[]): apiModel.Review[] =>
  Array.isArray(reviewList) ? reviewList.map(mapReviewsFromModelToApi).slice(-5) : [];

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  _id: house._id,
  name: house.name,
  image: house.images.picture_url,
  summary: house.summary,
  address: {
    country: house.address.country,
    street: house.address.street,
    market: house.address.market,
  },
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: Number(house.bathrooms.toString()),
  number_of_reviews: house.number_of_reviews,
  reviews: mapListReviewsFromModelToApi(house.reviews),
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);


export const mapReviewsFromApiToModel = (review: apiModel.Review): model.Review => ({
  _id: review._id,
  date: review.date ? new Date(review.date) : new Date(),
  reviewer_name: review.reviewer_name,
  comments: review.comments,
});

export const mapListReviewsFromApiToModel = (reviewList: apiModel.Review[]): model.Review[] =>
  Array.isArray(reviewList) ? reviewList.map(mapReviewsFromApiToModel).slice(-5) : [];

export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
  _id: house._id,
  name: house.name,
  images: {
    picture_url:house.image,
  },
  summary: house.summary,
  address: house.address,
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms,
  number_of_reviews: house.number_of_reviews,
  reviews: mapListReviewsFromApiToModel(house.reviews),
});

export const mapHouseListFromApiToModel = (
  houseList: apiModel.House[]
): model.House[] =>
  Array.isArray(houseList)
  ? houseList.map(mapHouseFromApiToModel)
  : [];
