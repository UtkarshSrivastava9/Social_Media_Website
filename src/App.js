// import { Home } from "./pages/home/Home";
// import { Login } from "@mui/icons-material";
// import Register from "./pages/registeration/Register.jsx";
// // import Home from "./pages/home/Home";
// // import Login from "./pages/login/Login.jsx";
// // import Profile from "./pages/profile/Profile.jsx";
// function App() {
//   return <Register/>
//     // <Login/>
//     // <Profile/>
// }
// export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/home/Home'; // Adjust the path as needed
// import Login from './pages/login/Login.jsx'; // Correctly import Login
// import Register from './pages/registeration/Register.jsx';
// import Profile from './pages/profile/Profile.jsx'; // Uncomment if needed

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Home page */}
//         <Route path="/login" element={<Login />} /> {/* Login page */}
//         <Route path="/register" element={<Register />} /> {/* Register page */}
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login.jsx';
import Register from './pages/registeration/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
import CreatePost from './pages/createPost/CreatePost.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} /> {/* Default to Login */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;

