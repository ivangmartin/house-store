import { connect, set } from 'mongoose';

import { envConstants } from 'core/constants';

set('debug', !envConstants.isProduction);

export const connectToDBServer = async (connectionURI: string) => {
  await connect(connectionURI, {
    useUnifiedTopology: true, // https://mongoosejs.com/docs/deprecations.html#useunifiedtopology
    useFindAndModify: false, // https://mongoosejs.com/docs/deprecations.html#findandmodify
    useNewUrlParser: true, // https://mongoosejs.com/docs/deprecations.html#the-usenewurlparser-option
  });
};
