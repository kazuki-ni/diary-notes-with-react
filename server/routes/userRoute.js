import express from 'express';

import { createUser, findUser } from '../DB/userDB.js';
import { isAuth } from '../auth.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const newUser = await createUser(req.body)
    .catch( err => console.error("Catch an error: ", err) );
  if (newUser) {
    console.log(
      ( req.body.isAdmin ) ?
        "Created a new admin!" : "Created a new user!"
    )
    res.send(newUser);
  } else {
    const message = ( req.body.isAdmin ) ?
      "Invalid Admin Data" : "Invalid User Data"
    res.status(401).send({ message: message });
  }
});

router.post('/login', async (req, res) => {
  const logInUser = await findUser(req.body)
    .catch( err => console.error("Catch an error: ", err) )
  if (logInUser) {
    res.send(logInUser);
  } else {
    res.status(401).send({ message: 'Invalid Id, Email or Password.' });
  }
});


// router.put('/:id', isAuth, async (req, res) => {
//   const userId = req.params.id;
//   const user = await User.findById(userId);
//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.password = req.body.password || user.password;
//     const updatedUser = await user.save();
//     res.send({
//       _id: updatedUser.id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       token: getToken(updatedUser),
//     });
//   } else {
//     res.status(404).send({ message: 'User Not Found' });
//   }
// });

export default router;