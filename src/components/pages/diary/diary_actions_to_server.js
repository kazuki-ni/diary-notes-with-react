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
      const { status, statusText } = error.response;
      alert("Failed to input diary to DB");
      console.warn(`Error! HTTP Status: ${status} ${statusText}`);
  })
}

//* date => diary
const fetchDiary = async (date) => {
  console.log("go check if DB has a diary on "+ date)

  try {
    const res = await axios.get( HOST + '/api/diary/fetch/' + date);
    const diary = res.data || {title: "", content: "", imgs: []}; //If DB has the memory, input automatically
    return diary;

  } catch( error ) {
    const { status, statusText } = error.response;
    alert("Failed to fetch diary from DB");
    console.warn(`Error! HTTP Status: ${status} ${statusText}`);
  }
}

export {inputDiary, fetchDiary};
