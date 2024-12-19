// import "./login.css"
// export default function Login() {
//     return(
//         <div className="login">
//             <div className="loginWrapper">
//                 <div className="loginLeft">
//                     <h3 className="loginLogo">SocialMediaMP88</h3>
//                     <span className="loginDesc">Connect with friends and the world around you.</span>
//                 </div>
//                 <div className="loginRight">
//                     <div className="loginBox">
//                         <input placeholder="Email" className="loginInput"/>
//                         <input placeholder="Password" className="loginInput"/>
//                         <button className="loginButton">Log In</button>
//                         <span className="loginForgot">Forgot Password?</span>
//                         {/* <button className="loginRegisterButton">Create a New Password</button> */}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// import React from 'react';
// import './login.css';
// import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons

// export default function Login() {
//     return (
//         <div className="login">
//             <div className="loginWrapper">
//                 <div className="loginLeft">
//                     <h3 className="loginLogo">SocialMediaMP88</h3>
//                     <span className="loginDesc">Connect with friends and the world around you.</span>
//                 </div>
//                 <div className="loginRight">
//                     <div className="loginBox">
//                         <div className="inputGroup">
//                             <FaEnvelope className="inputIcon" />
//                             <input placeholder="Email" className="loginInput" />
//                         </div>
//                         <div className="inputGroup">
//                             <FaLock className="inputIcon" />
//                             <input placeholder="Password" type="password" className="loginInput" />
//                         </div>
//                         <button className="loginButton">Log In</button>
//                         <span className="loginForgot">Forgot Password?</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import './login.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import for navigation

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            setError('Both fields are required!');
            return;
        }
        // Clear error and navigate to Profile
        setError('');
        navigate('/profile'); // Redirect to Profile
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialMediaMP88</h3>
                    <span className="loginDesc">Connect with friends and the world around you.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <div className="inputGroup">
                            <FaEnvelope className="inputIcon" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="loginInput"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="inputGroup">
                            <FaLock className="inputIcon" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="loginInput"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <span className="errorText">{error}</span>}
                        <button className="loginButton" onClick={handleLogin}>
                            Log In
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
