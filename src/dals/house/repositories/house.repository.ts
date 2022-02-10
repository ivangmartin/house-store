import { House } from '../house.model';
import { Review } from 'dals';

export interface HouseRepository {
  getHouseList: (page: number, pagesize: number, country: string) => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;
  insertReview: (review: Review, id: string) => Promise<Review>;
}
