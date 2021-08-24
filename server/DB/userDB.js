import User from "../models/userModel.js";
import connectMongo from "./database.js";
import { getToken } from "../auth.js";


async function createUser(userData) {
  return (
    await connectMongo().then( async mongoose => {
      try {
        const user = new User({
          id       : userData.id,
          name     : userData.name,
          email    : userData.email,
          password : userData.password,
          isAdmin  : userData.isAdmin,
        });
        const newUser = await user.save();
        if (newUser) return {
          id     : newUser.id,
          name    : newUser.name,
          email   : newUser.email,
          isAdmin : newUser.isAdmin,
          token   : getToken(newUser)
        };
        return false;

      } catch (err) {
        throw new Error(err);

      } finally {
        mongoose.connection.close();
      }
    })
  )
}

async function findUser(query) {
  return (
    await connectMongo().then( async mongoose => {
      try {
        const logInUser = await User.findOne({
          id       : query.id,
          email    : query.email,
          password : query.password,
        });
        if (logInUser) return {
          id      : logInUser.id,
          name    : logInUser.name,
          email   : logInUser.email,
          diaries : logInUser.diaries,
          isAdmin : logInUser.isAdmin,
          token   : getToken(logInUser),
        };
        return false;

      } catch (err) {
        throw new Error(err);

      } finally {
        mongoose.connection.close();
      }
    })
  )
}

export { createUser, findUser };