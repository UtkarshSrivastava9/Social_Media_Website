// import React from 'react';
// import './register.css';

// const Register = () => {
//   return (
//     <div className="register-container">
//       <div className="register-left">
//         <div className="image-placeholder">
//           {/* Image goes here */}
//         </div>
//         <h2 className="slogan">Let’s Make it Happen Together!</h2>
//       </div>
//       <div className="register-right">
//         <header className="header">
//           <h1 className="logo">CO.</h1>
//           <p className="login-link">
//             Already have an account? <a href="#">Sign in here</a>
//           </p>
//         </header>
//         <h2 className="form-title">Create An Account</h2>
//         <form className="register-form">
//           <div className="input-group">
//             <input type="text" placeholder="First Name" required />
//             <input type="text" placeholder="Last Name" required />
//           </div>
//           <div className="input-group">
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Address" required />
//           </div>
//           <div className="input-group">
//             <input type="password" placeholder="Create Password" required />
//             <input type="password" placeholder="Confirm Password" required />
//           </div>
//           <div className="terms">
//             <input type="checkbox" required />
//             <label>
//               Creating your account and you accepting{' '}
//               <a href="#">Terms & Conditions</a>.
//             </label>
//           </div>
//           <button type="submit" className="create-account-btn">
//             Create Account
//           </button>
//           <div className="social-signup">
//             <button className="facebook-btn">Sign up Using Facebook</button>
//             <button className="twitter-btn">Sign up Using Twitter</button>
//           </div>
//         </form>
//         <footer className="footer">
//           &copy; 2024, Company Inc. All rights reserved.
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Register;


// Register.jsx


// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './register.css';


// const Register = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   return (
//     <div className="register-container">
//       <div className="register-left">
//         <div className="image-placeholder">
//           <img src="assets/image.png" alt="Placeholder" />
//         </div>


//         <h2 className="slogan">Let’s Make it Happen Together!</h2>
//       </div>
//       <div className="register-right">
//         <header className="header">
//           <h1 className="logo">MP88</h1>
//           <p className="login-link">
//             Already have an account?{' '}
//             <a href="#" onClick={() => navigate('/login')}>
//               Sign in here
//             </a>

//           </p>
//         </header>
//         <h2 className="form-title">Create An Account</h2>
//         <form className="register-form">
//           <div className="input-group">
//             <input type="text" placeholder="First Name" required />
//             <input type="text" placeholder="Last Name" required />
//           </div>
//           <div className="input-group">
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Address" required />
//           </div>
//           <div className="input-group">
//             <input type="password" placeholder="Create Password" required />
//             <input type="password" placeholder="Confirm Password" required />
//           </div>
//           <div className="terms">
//             <input type="checkbox" required />
//             <label>
//               Creating your account and you accepting{' '}
//               <a href="#">Terms & Conditions</a>.
//             </label>
//           </div>
//           <button type="submit" className="create-account-btn">
//             Create Account
//           </button>
//           <br />
//           <div className="social-signup">
//             <button className="facebook-btn">Sign up Using Facebook</button>
//             <button className="twitter-btn">Sign up Using Twitter</button>
//           </div>
//         </form>
//         <footer className="footer">
//           &copy; 2024, Company Inc. All rights reserved.
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="image-placeholder">
          <img src="assets/image.png" alt="Placeholder" />
        </div>
        <h2 className="slogan">Let’s Make It Happen Together!</h2>
        <p className="sub-slogan">Join our community to unlock endless opportunities.</p>
      </div>
      <div className="register-right">
        <header className="header">
          <h1 className="logo">MP88</h1>
          <p className="login-link">
            Already have an account?{' '}
            <a href="#" onClick={() => navigate('/login')}>
              Sign in here
            </a>
          </p>
        </header>
        <h2 className="form-title">Create An Account</h2>
        <form className="register-form">
          <div className="input-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Address" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Create Password" required />
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="terms">
            <input type="checkbox" required />
            <label>
              By creating your account, you accept our{' '}
              <a href="#">Terms & Conditions</a>.
            </label>
          </div>
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
          <div className="social-signup">
            <button className="facebook-btn">
              <i className="fab fa-facebook-f"></i> Sign up Using Facebook
            </button>
            <button className="twitter-btn">
              <i className="fab fa-twitter"></i> Sign up Using Twitter
            </button>
            <button className="google-btn">
              <i className="fab fa-google"></i> Sign up Using Google
            </button>
          </div>
        </form>
        <footer className="footer">
          &copy; {new Date().getFullYear()} MP88 Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Register;
