import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const { setUser, setAuth } = useContext(ProjectsContext);

  const navigate = useNavigate();

  let handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setUserLogin({ ...userLogin, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/auth/login", userLogin).then((response) => {
      setUser(response.data);
      setAuth(true);
      navigate("/dashboard");
    });
  };

  return (
    <div className="login container">
      <div className="login-header">
        <form onSubmit={handleSubmit} className="form-login" noValidate>
          <div className="form-login-container">
            <label htmlFor="email"></label>
            <input
              className="login-input"
              name="email"
              id="email"
              type="email"
              value={userLogin.email}
              placeholder="Email"
              onChange={handleChange}
            />

            <div className="show-hide-password">
              <label htmlFor="password"></label>
              <input
                className="login-input"
                name="password"
                id="password"
                value={userLogin.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button className="btn-login" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>

      {/* <div className="btn-password-registration"></div> */}
    </div>
  );
};

export default Login;

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
// const { setAuth, setUser, setLoading } = useContext(AuthContext);

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
