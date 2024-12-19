// import "./topbar.css"
// import { Search,Person,Chat,Notifications } from "@mui/icons-material"
// // import Login from "./pages/login/Login";
// export default function Topbar() {
//     return (
//         <div className="topbarContainer">
//             <div className="topbarLeft">
//                 <span className="logo">SocialMedia</span>
//             </div>
//             <div className="topbarCentre">
//                 <div className="searchbar">
//                     <Search className="searchIcon" />
//                     <input placeholder="Search for friends,posts or videos" className="searchInput"/>
                    
//                 </div>
//             </div>
//             <div className="topbarRight">
//                 <div className="topbarLinks">
//                     <span className="topbarLink">Homepage</span>
//                     <span className="topbarLink">Timeline</span>
//                     <span className="topbarLink">Login</span>
//                 </div>
//                 <div className="topbarIcons">
//                     <div className="topbarIconItem">
//                         <Person />
//                         <span className="topbarIconBadge">1</span>
//                     </div>
//                     <div className="topbarIconItem">
//                         <Chat />
//                         <span className="topbarIconBadge">2</span>
//                     </div>
//                     <div className="topbarIconItem">
//                         <Notifications />
//                         <span className="topbarIconBadge">1</span>
//                     </div>
//                 </div>
//                 <img src="/assets/person/img1.jpg" alt="" className="topbarImg"/>
//             </div>
//         </div>
//     )
// }

import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'; // Import for navigation

export default function Topbar() {
    const navigate = useNavigate(); // Hook for navigation

    const handleCreatePost = () => {
        navigate('/create-post'); // Navigate to the create post page
    };

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SocialMedia</span>
            </div>
            <div className="topbarCentre">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends, posts, or videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                    <span className="topbarLink">Login</span>
                    <button className="createPostButton" onClick={handleCreatePost}>Create Post</button> {/* New Button */}
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/img1.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    );
}
