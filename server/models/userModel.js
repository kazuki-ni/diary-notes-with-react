import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id       : { type: String, required: true },
  name     : { type: String, required: true },
  email    : { type: String, required: true, unique: true, index: true, dropDups: true },
  password : { type: String, required: true },
  isAdmin  : { type: Boolean, required: true, default: false },
  diaries  : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Diary' }]
});

const User = mongoose.model('User', userSchema);

export default User;