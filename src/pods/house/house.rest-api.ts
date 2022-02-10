import { Router } from 'express';
import { houseRepository } from 'dals';
import { mapReviewsFromApiToModel, mapHouseFromModelToApi, mapHouseListFromModelToApi
} from './house.mappers';

export const housesApi = Router();

housesApi
  .get('/', async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const country  = String(req.query.country);
      const houseList = await houseRepository.getHouseList(page,pageSize,country);
      res.send(mapHouseListFromModelToApi(houseList));
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.getHouse(id);
      res.send(mapHouseFromModelToApi(house));
    } catch (error) {
      next(error);
    }
  })
  .put('/:_id', async (req, res, next) => {
    try {
      const { _id } = req.params;
      const modelReview = mapReviewsFromApiToModel({...req.body});
      await houseRepository.insertReview(modelReview,_id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  })

