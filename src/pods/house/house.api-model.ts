export interface Review {
  _id: string;
  date: string;
  reviewer_name: string,
  comments: string,
}

export interface Address{
  country: string;
  street: string;
  market: string;
}

export interface House {
  _id: string,
  name: string,
  image: string,
  summary: string,
  address: Address,
  bedrooms: number,
  beds: number,
  bathrooms: number,
  number_of_reviews: number;
  reviews: Review[],

}

