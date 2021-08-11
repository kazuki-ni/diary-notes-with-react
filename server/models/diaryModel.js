import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema({
  year      : { type: String, required: true },
  month     : { type: String, required: true },
  day       : { type: String, required: true },
  timestamp : { type: String, required: true },
  mood      : { type: String, required: true },
  bg        : { type: String},
  imgs      : { type: [String]},
  title     : { type: String, required: true },
  content   : { type: String}
});

const Diary = mongoose.model('Diary', diarySchema);

export default Diary;