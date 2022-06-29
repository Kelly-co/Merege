// //  Add in the authentication within this file
// const authRouter = require("express").Router();
// const User = require("../models/user");
// const { calculateJWTToken } = require("../helpers/users");
// const jwt = require("jsonwebtoken");
// const privateKey = process.env.PRIVATE_KEY;

// // http://localhost:5000/auth/login
// authRouter.post("/anmeldung", (req, res) => {
//   const { email, password } = req.body;

//   User.findByEmail(email).then((user) => {
//     console.log(user);
//     if (!user) res.status(401).send("Email not found");
//     else {
//       User.verifyPassword(password, user.hashedPassword).then(
//         (passwordIsCorrect) => {
//           if (passwordIsCorrect) {
//             const token = calculateJWTToken(user);
//             res.cookie("user_token", token);
//             res.status(202).send(user);
//           } else res.status(403).send("Wrong password");
//         }
//       );
//     }
//   });
// });

// // http://localhost:5000/auth/signup
// authRouter.post("/registrieren", (req, res) => {
//   const { email } = req.body;
//   let validationErrors = null;
//   User.findByEmail(email)
//     .then((existingUserWithEmail) => {
//       if (existingUserWithEmail) return Promise.reject("DUPLICATE_EMAIL");
//       validationErrors = User.validate(req.body);
//       if (validationErrors) return Promise.reject("INVALID_DATA");
//       return User.create(req.body);
//     })
//     .then((createdUser) => {
//       res.status(201).json(createdUser);
//     })
//     .catch((err) => {
//       console.log(err);
//       if (err === "DUPLICATE_EMAIL")
//         res.status(409).json({ message: "This email is already used" });
//       else if (err === "INVALID_DATA")
//         res.status(422).json({ validationErrors });
//       else res.status(500).send("Error saving the user");
//     });
// });

// // http://localhost:5000/auth/verify-token

// authRouter.get("/verify-token", (req, res) => {
//   const token = req.headers.authorization.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "User needs to login" });

//   const decryptToken = jwt.verify(token, privateKey);
//   User.findOne(decryptToken.id).then((foundUser) => {
//     if (!foundUser) return res.status(404).json({ message: "User not found" });
//     res.status(200).send(foundUser);
//   });
// });

// module.exports = authRouter;
