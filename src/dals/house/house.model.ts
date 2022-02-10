export interface Review {
  _id: string;
  date: Date;
  reviewer_name: string,
  comments: string,
}

export interface Images{
  picture_url: string;
}

export interface Address{
  country: string;
  street: string;
  market: string;
}

export interface House {
  _id: string;
  name: string;
  images: Images;
  summary: string,
  address: Address,
  bedrooms: number,
  beds: number,
  bathrooms: number,
  number_of_reviews: number;
  reviews: Review[],

}

