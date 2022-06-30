// //  Add in the authentication within this fil const authRouter = require("express").Router() const User = require("../models/user") const { calculateJWTToken } = require("../helpers/users") const jwt = require("jsonwebtoken") const privateKey = process.env.PRIVATE_KEY;
const router = require("express").Router();
const User = require("../models/users");
// // http://localhost:5000/auth/login
 router.post("/login", (req, res) => {
   const { email, password } = req.body;

   User.findByEmail(email).then((user) => {
     console.log(user);
     if (!user) res.status(401).send("Email not found");
     else {
       User.verifyPassword(password, user.hashedPassword).then(
         (passwordIsCorrect) => {
           if (passwordIsCorrect) {
             res.status(202).send(user);
           } else res.status(403).send("Wrong password");
         }
       );
     }
   });
 });


 module.exports = router;
