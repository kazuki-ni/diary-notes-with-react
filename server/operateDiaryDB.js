import { client, notes } from "./database.js";

async function insertDiary(query) {
  try {
    await client.connect();

    const result = await notes.insertOne(query);

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
  } finally {
    await client.close();
  }
}

async function findDiary(date) {
  try {
    await client.connect();

    const result = await notes.findOne({date: date});
    console.log(result);
    return result;

  } finally {
    await client.close();
  }
}

export { insertDiary, findDiary };