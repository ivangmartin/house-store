import mongoose, { Schema, SchemaDefinition } from 'mongoose';
import { House, Images ,Address, Review } from './house.model';

const imagesSchema = new Schema ({
  picture_url: { type: Schema.Types.String},
} as SchemaDefinition<Images>);

const addressSchema = new Schema ({
  country: { type: Schema.Types.String},
  street: { type: Schema.Types.String},
  market: { type: Schema.Types.String},
} as SchemaDefinition<Address>);

const reviewSchema = new Schema ({
  _id: { type: Schema.Types.String, required: true },
  date: { type: Schema.Types.Date},
  reviewer_name: { type: Schema.Types.String},
  comments: { type: Schema.Types.String},
} as SchemaDefinition<Review>);


const houseSchema = new Schema({
  _id: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String},
  images: { type: imagesSchema},
  summary: { type: Schema.Types.String},
  address: { type: addressSchema},
  bedrooms: { type: Schema.Types.Number},
  beds: { type: Schema.Types.Number},
  bathrooms: { type: Schema.Types.Number},
  number_of_reviews: { type: Schema.Types.Number},
  reviews: [{ type: reviewSchema}],
} as SchemaDefinition<House>);


// he tenido que cambiar el nombrea "listinghouses" en la base de datos porque, el "listingsAndReviews" me lo pasaba a miniscula y no encontraba la coleccion
export const houseContext = mongoose.model<House>('listinghouses', houseSchema);

