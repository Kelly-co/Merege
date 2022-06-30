
 const connection = require("../config");
 const db = connection.promise();
 const bcrypt = require("bcrypt");

// const validate = (data, forCreation = true) => {
//     const presence = forCreation ? "required" : "optional";
//     return Joi.object({
//         name: Joi.string().min(5).presence(presence).regex(/^([^0-9]*)$/),
//         email: Joi.string().email().regex(/^([a-z0-9öäüÖÄÜ.]+)@((?:[a-z0-9öäüÖÄÜ.]+.)+)([a-zA-Z]{2,4})/).presence(presence),
//         password: Joi.string().min(8).max(50).required().regex(/^(?=.*[a-z\u00e4-\u00fc])(?=.*[A-Z\u00c4-\u00df])(?=.*\d)(?=.*[_"/(){}+´`ªº:;,[=«»><@$!%'*.?&£#§%€|\[\\¨^~-])[A-Z\u00c4-\u00dfa-z\u00e4-\u00fc\d_"/(){}+´`ªº:;,[=«»><@$!%'*.?&£#§%€|\[\\¨^~-]/,
//             'password').presence(presence),
//         birthday: Joi.date().presence(presence),
//         newsletter: Joi.boolean()
//     }).validate(data, { abortEarly: false }).error;
// };

 const findByEmail = (email) => {

     return db
         .query("SELECT * FROM users WHERE email = ?", [email])
         .then(([results]) => results[0]);
 };

 const verifyPassword = async (plainPassword, hashedPassword) => {
    console.log(bcrypt.compareSync(plainPassword,hashedPassword))
    return bcrypt.compareSync(plainPassword,hashedPassword);
};

// const findMany = () => {
//     let sql = "SELECT id, name, email FROM users";
//     return db.query(sql).then(([results]) => results);
// };

// const findOne = (id) => {
//     return db
//         .query(
//             "SELECT id,name, email, birthday, newsletter, pref_percentage, pref_max_amount, role FROM users WHERE id = ?",
//             [id]
//         )
//         .then(([results]) => results[0]);
// };

// const findByEmailWithDifferentId = (email, id) => {
//     return db
//         .query("SELECT * FROM users WHERE email = ? AND id <> ?", [email, id])
//         .then(([results]) => results[0]);
// };

// const create = ({ name, email, birthday, newsletter, password }) => {
//     // const salt = bcrypt.genSalt(10)

//     return bcrypt.hash(password, 10).then((hashedPassword) => {
//         return db
//             .query("INSERT INTO users SET ?", {
//                 name,
//                 email,
//                 birthday,
//                 newsletter,
//                 hashedPassword
//             })
//             .then(([result]) => {
//                 const id = result.insertId;
//                 return { name, email, birthday, newsletter, id };
//             });
//     });
// };

// const update = (id, newAttributes) => {
//     return db.query("UPDATE users SET ? WHERE id = ?", [newAttributes, id]);
// };

// const destroy = (id) => {
//     return db
//         .query("DELETE FROM users WHERE id = ?", [id])
//         .then(([result]) => result.affectedRows !== 0);
// };



// const changePassword = (newPassword, userId) => {
//     return bcrypt.hash(newPassword, 10).then((hash) => {
//       return db.query("UPDATE users SET hashedPassword = ? WHERE id = ?", [
//         hash,
//         userId,
//       ]);
//     });
//   };

 module.exports = {
//     findMany,
//     findOne,
//     validate,
//     create,
//     update,
//     destroy,
     findByEmail,
//     findByEmailWithDifferentId,
     verifyPassword,
//     changePassword
 }
