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
const fetchDiary = async (date) => {
  console.log("go check if DB has a diary on "+ date)
  const empty_diary = {
    mood 		: "",
    bg 			: "",
    imgList : "",
    title 	: "",
    content : ""
  }

  const diary = await axios.get( HOST + '/api/diary/fetch/' + date)
    //* Success
    .then( res => {
      console.log("Fetch diary from DB successfully");
      const result = (res.data === {}) ? empty_diary : res.data;
      return result; // => diary
    })
    //* Failure
    .catch( error => {
      console.warn("Failed to fetch diary from DB");
      console.error(error);
      return empty_diary; // => diary
    } )

  return diary;
}

export {inputDiary, fetchDiary};
