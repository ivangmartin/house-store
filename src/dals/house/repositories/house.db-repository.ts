import { houseContext } from "../house.context";
import { HouseRepository } from './house.repository';
import { House } from '../house.model';
import { Review } from '..';


export const dbRepository: HouseRepository = {
  getHouseList: async (page, pageSize, country) => {
    let toSkip = 0;
    let toLimit = 6;
    if(pageSize && page){
      toSkip = (page-1)*pageSize;
      toLimit = pageSize;
    }

    if(country !== "undefined" && country){
      return await houseContext.find(
        {
        "address.country": {$regex: country, $options:'i'},
        },
        ).skip(toSkip).limit(toLimit).lean();
    }
    return await houseContext.find().skip(toSkip).limit(toLimit).lean();
  },
  getHouse: async (id: string) => {
    return await houseContext.findOne({
      _id: id,
    }).lean();
  },
  insertReview: async (review: Review,id: string) => {

    const value  = await houseContext.findOne(
      {
        _id: id,
      },
    ).lean();

    review._id = (value.number_of_reviews+1).toString();

    await houseContext.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $push: {reviews: review},
        $inc: {number_of_reviews: 1}

      },
      { upsert: true, new: true }
    ).lean();
    return review;
  },
};

