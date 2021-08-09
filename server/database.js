// import { config } from './config.js';
import { MongoClient } from 'mongodb';

// const uri = `mongodb+srv://${config.USER_NAME}:${config.USER_PASSWD}@${config.HOST_NAME}/${config.DB_NAME}?retryWrites=true&w=majority`;

const uri = "mongodb+srv://nanora:kyohtaroh1013@bugkitarucluster.eynjb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const notes = client.db("diary").collection("notes");

export { client, notes };