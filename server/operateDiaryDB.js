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
  await client.connect().catch((error)=>{console.log(error); return;});
  const result = await notes.findOne({date: date}).catch( error => {
    console.error(error);
    return {};
  });
  showDiary(result);
  await client.close().catch(error=>console.log(error));
  return result;

  // try {
  //   await client.connect();

  //   const result = await notes.findOne({date: date}) || {};
  //   console.log(result);
  //   // showDiary(result);
  //   return result;

  // } catch (error) {
  //   console.warn("Fail to find a diary due to ", error)
  //   // const result = {
  //   //   mood: "",
  //   //   bg: "",
  //   //   imgs: [],
  //   //   title: "",
  //   //   content: ""
  //   // };
  //   // showDiary(result);
  //   // return result;
  //   throw(error);

  //* Anyway, show diary
  // } finally {
  //   await client.close();
  // }
}

const showDiary = (result) => {
  //* show diary
  console.log("--------------------diary--------------------");
  Object.keys(result).forEach( key => {
    try {
      if ( key === "imgs" ) {
        result[key].map( ( url, i ) => console.log(`imgs ${i+1}: ${url.slice(0, 50)}`) )
      } else {
        console.log(`${key}: ${result[key]}`);
      }
    } catch (error){
      console.log("Couldn't get values of this key: "+key);
      console.error(error);
    }
  })
  console.log("---------------------------------------------");
}

export { insertDiary, findDiary };