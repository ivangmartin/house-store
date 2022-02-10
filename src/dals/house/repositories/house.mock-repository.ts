import { HouseRepository } from './house.repository';
import { House } from '../house.model';
import { Review } from 'dals';
import { db } from '../../mock-data';


const insertReview = (review: Review, id: string) => {
  db.houses = db.houses.map((b) => {
   if(b._id === id){
     review._id = (b.number_of_reviews + 1).toString();
      b.reviews.push(review);
      b.number_of_reviews++;
   }
   return b;
  }
);
  return review;
};

const paginateHouseList = (
  houseList: House[],
  page: number,
  pageSize: number,
): House[] => {
  let paginatedHouseList = [...houseList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
    paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
  }
  return paginatedHouseList;
};

const filterByCountry = (houseList: House[], country: string): House[] => {
  const houseListFiltered = houseList.filter(house => house.address.country.toLowerCase().indexOf(country.toLowerCase()) !== -1);
  return houseListFiltered;
};

export const mockRepository: HouseRepository = {
  getHouseList: async (page,pageSize,country) => {
    if(country !== "undefined" && country){
      db.houses = filterByCountry(db.houses,country);
    }
    return paginateHouseList(db.houses,page,pageSize);
  },
  getHouse: async (id: string) =>
    db.houses.find((b) => b._id === id),

  insertReview: async (review,id) => insertReview(review,id),
};
