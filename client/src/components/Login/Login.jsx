import React from "react";

const login = () => {
  return <div></div>;
};

export default login;

// import React, { useState, useEffect, useContext } from 'react'
// import '../../../../styles/styles.scss';
// import './Login.scss';
// import axios from 'axios';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Joi from 'joi-browser';
// import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
// import { AuthContext } from '../../../../contexts/AuthContext';
// import Cookies from "js-cookie";

// function Login() {

//     // const [credentials, setCredentials] = useState({})
//     const { setAuth, setUser, setLoading } = useContext(AuthContext);

//     const [userLogin, setUserLogin] = useState(
//         {
//             email: '',
//             password: '',
//         }
//     )

//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (Cookies.get('user_token')) {navigate('/uberblick')}
//       }, []);

//     useEffect(() => {

//         currentLocation();
//     }, [location]);

//     const currentLocation = () => {
//         if (location.pathname === "/anmeldung") {
//             document.querySelector('.navbar').style.display = "none"
//         }
//     }

//     const [showPassword, setShowPassword] = useState(false)
//     const [displayErrorsEmail, setDisplayErrorsEmail] = useState([])
//     const [displayErrorsPassword, setDisplayErrorsPassword] = useState([])
//     const [showErrorEmail, setShowErrorEmail] = useState(false)
//     const [showErrorPassword, setShowErrorPassword] = useState(false)

//     let errors = []
//     let schema = {
//         email: Joi.string().required().email().regex(/^([a-z0-9öäüÖÄÜ.]+)@((?:[a-z0-9öäüÖÄÜ.]+.)+)([a-zA-Z]{2,4})/).error(errors => {
//             errors.forEach(err => {
//                 switch (err.type) {
//                     case "any.empty":
//                         err.message = "Email darf nicht leer sein!";
//                         break;
//                     case "string.email":
//                         err.message = `E-Mail muss eine gültige E-Mail-Adresse sein!`;
//                         break;
//                     case "string.regex.base":
//                         err.message = `E-Mail muss eine gültige E-Mail-Adresse sein!`;
//                         break;
//                     default:
//                         err.message = `E-Mail ist nicht erlaubt`;
//                         break;
//                 }
//             })
//             return errors;
//         }),
//         password: Joi.string()
//             .error(errors => {
//                 errors.forEach(err => {
//                     switch (err.type) {
//                         case "any.empty":
//                             err.message = "Das Passwort darf nicht leer sein!";
//                             break;
//                         default:
//                             err.message = `Passwort ist nicht erlaubt`;
//                             break;
//                     }
//                 })
//                 return errors;
//             })
//     }

//     let validate = () => {
//         let result = Joi.validate(userLogin, schema, { abortEarly: false })
//         setDisplayErrorsEmail([])
//         setDisplayErrorsPassword([])

//         if (result.error !== null) {
//             errors = result.error.details

//             let catchFirstErrorEmail = false;
//             let catchFirstErrorPassword = false;
//             for (let i = 0; i < result.error.details.length; i++) {
//                 if (result.error.details[i].context.key === "email" && catchFirstErrorEmail === false) {
//                     setDisplayErrorsEmail([result.error.details[i].message])
//                     catchFirstErrorEmail = true;
//                 }

//                 else if (result.error.details[i].context.key === "password" && catchFirstErrorPassword === false) {
//                     setDisplayErrorsPassword([result.error.details[i].message])
//                     catchFirstErrorPassword = true;
//                 }

//                 else if (catchFirstErrorPassword === true && catchFirstErrorEmail === true) {
//                     break
//                 }
//             }
//         }
//     }

//     let handleChange = (e) => {
//         e.preventDefault();
//         const value = e.target.value
//         const name = e.target.name
//         setUserLogin({ ...userLogin, [name]: value })
//     }

//     let handleSubmit = (e) => {
//         e.preventDefault();
//         validate()
//         setShowErrorPassword(true)
//         setShowErrorEmail(true)

//         if (errors.length === 0) {
//             axios.post('/auth/anmeldung', userLogin)
//                 .then((response) => {
//                     setUser(response.data)
//                     setAuth(true)
//                     setLoading(true)
//                     navigate('/uberblick');

//                 })
//                 .catch((error) => {
//                     if (error.response.status === 401) {
//                         setDisplayErrorsEmail("Email wurde nicht gefunden")
//                     }
//                     else if (error.response.status === 403) {
//                         setDisplayErrorsPassword("Das eingegebene Passwort ist falsch")
//                     }
//                 })
//         }
//     }

//     let toggleShow = (e) => {
//         setShowPassword(!showPassword)
//     }

//     return (
//         <div className='login container'>
//             <div className='login-header'>
//                 <h1>Willkommen zurück!</h1>
//                 <form onSubmit={handleSubmit} className='form' noValidate>
//                     <div>
//                         <label htmlFor='email'></label>
//                         <input name='email' id='email' type='email' value={userLogin.email} placeholder='Email' onChange={handleChange} onClick={validate} /><br />
//                         <div className='show-hide-password'>
//                             <label htmlFor='password'></label>
//                             <input name='password' id='password' type={showPassword ? "text" : "password"} value={userLogin.password} placeholder='Passwort' onChange={handleChange} className="password" /><br />
//                             <div onClick={toggleShow} className='password-eye-btn'>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</div>
//                         </div>
//                         <div className='error-box'>
//                             <p style={{ display: showErrorEmail ? 'block' : 'none' }}>
//                                 {displayErrorsEmail}
//                             </p>
//                             <p style={{ display: showErrorPassword ? 'block' : 'none' }}>
//                                 {displayErrorsPassword}
//                             </p>
//                         </div>
//                     </div >

//                     <button type='submit' className='button'>einloggen</button>
//                 </form >
//             </div >

//             <div className='btn-password-registration'>
//                 <Link to="/anmeldung/passwort-vergessen" state={{ prevPath: location.pathname }} >Passwort vergessen?</Link>
//                 <Link to="/registrieren">Jetzt registrieren</Link>
//             </div>
//         </div >
//     )
// }

// export default Login
