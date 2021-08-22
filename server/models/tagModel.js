import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  tag      : { type: String},
  diaries  : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Diary' }]
});

const Tag = mongoose.model('User', tagSchema);

export default Tag;