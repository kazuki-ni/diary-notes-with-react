import axios from 'axios'

const HOST = "http://localhost:9000"

//* diary => ()
const inputDiary = (params) => {

  console.log(params)
  console.log("is to be input")

  axios
    .post( HOST + '/api/diary/input', params)
    .then( res => {
      console.log(res.data);
      // this.props.history.push('/');
    })
    .catch( error => {
      alert("Failed to input diary to DB");
      console.warn(error);
  })
}

//* date => diary
const fetchSingleDiary = async (date) => {
  console.log("Go check if DB has a diary of "+ date)

  return (
    await axios.get( HOST + '/api/diary/' + date)

      .then( res => {
        console.log("Fetched diary from DB successfully");
        const result = res.data || null;
        return result; // => diary
      })

      .catch( error => {
        console.warn("Failed to fetch diary from DB");
        console.error(error);
        return null; // => diary
      } )
  )
}

const fetchMoods = (year, month) => {
  console.log("Go fetch moods the following month ↓");
  console.log("Year: ", year);
  console.log("Month: ", month);

  // const moods = await axios.get( HOST + '/api/diary/mood/', {
  //   year : year,
  //   month: month
  // })
  //   //* Success
  //   .then( res => {
  //     console.log("Fetched moods from DB successfully");
  //     const result = res.data;
  //     return result; // => moods
  //   })
  //   //* Failure
  //   .catch( error => {
  //     console.warn("Failed to fetch moods from DB");
  //     console.error(error);
  //     return {}; // => moods
  //   } )
  const moods = {
    '1': 'Happy',
    '2': 'Normal',
    '3': 'Rad',
    '4': 'Rad',
    '5': 'Happy',
    '6': 'Sad'
  }

  return moods;
}

export {inputDiary, fetchSingleDiary, fetchMoods};
