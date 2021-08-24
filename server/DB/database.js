import { config } from '../config.js';
import mongoose from 'mongoose';

const mongodbUrl = config.MONGODB_URL;

const connectMongo = async () => {
  await mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
    .then( result => {
      console.log(
        `Connected to Mongo! Database name: "${result.connections[0].name}"`
      )
    })
    .catch( err => {
      console.error('Error connecting to mongo', err);
    });

  return mongoose;
}

export default connectMongo;

//* debug
// connectMongo().then( mongoose => mongoose.connection.close() );
