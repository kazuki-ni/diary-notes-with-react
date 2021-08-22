import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema({
  user      : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  year      : { type: String, required: true },
  month     : { type: String, required: true },
  day       : { type: String, required: true },
  timestamp : { type: String, required: true },
  mood      : { type: String, required: true },
  bg        : { type: String},
  imgList   : { type: [String]},
  title     : { type: String, required: true },
  content   : { type: String},
  tags      : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

const Diary = mongoose.model('Diary', diarySchema);

export default Diary;