import { disconnect } from 'mongoose';
import { connectToDBServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { houseContext } from 'dals/house/house.context';

export const run = async () => {

  await connectToDBServer('mongodb://localhost:27017/houses');

  const houseList = await houseContext.find().limit(25).lean();

  await disconnect();
   await connectToDBServer(envConstants.MONGODB_URI);
   for (const house of houseList) {

     await houseContext.insertMany({
       ...house,
    });
   }
   await disconnect();
};
