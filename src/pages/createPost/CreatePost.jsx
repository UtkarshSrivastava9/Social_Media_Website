// import React, { useState } from 'react';
// import './createPost.css'; // Add your CSS file for styling

// export default function CreatePost() {
//     const [postText, setPostText] = useState('');
//     const [image, setImage] = useState(null);

//     const handleImageChange = (e) => {
//         setImage(URL.createObjectURL(e.target.files[0]));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Logic to handle form submission, e.g., sending data to a server or updating state
//         console.log({ postText, image });
//         alert('Post created successfully!');
//     };

//     return (
//         <div className="createPostContainer">
//             <h2>Create a New Post</h2>
//             <form onSubmit={handleSubmit} className="createPostForm">
//                 <textarea
//                     className="postTextArea"
//                     placeholder="What's on your mind?"
//                     value={postText}
//                     onChange={(e) => setPostText(e.target.value)}
//                 />
//                 <input type="file" onChange={handleImageChange} className="fileInput" />
//                 {image && <img src={image} alt="Preview" className="imagePreview" />}
//                 <button type="submit" className="submitPostButton">Post</button>
//             </form>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import './createPost.css'; // Updated CSS file for enhanced styling
// import { FaImage, FaSmile } from 'react-icons/fa'; // Importing icons for extra features

// export default function CreatePost() {
//     const [postText, setPostText] = useState('');
//     const [image, setImage] = useState(null);

//     const handleImageChange = (e) => {
//         setImage(URL.createObjectURL(e.target.files[0]));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Logic to handle form submission, e.g., sending data to a server or updating state
//         console.log({ postText, image });
//         alert('Post created successfully!');
//         setPostText('');  // Reset form fields after submission
//         setImage(null);
//     };

//     return (
//         <div className="createPostContainer">
//             <h2>Create a New Post</h2>
//             <form onSubmit={handleSubmit} className="createPostForm">
//                 <textarea
//                     className="postTextArea"
//                     placeholder="What's on your mind?"
//                     value={postText}
//                     onChange={(e) => setPostText(e.target.value)}
//                 />
//                 <div className="fileInputContainer">
//                     <label htmlFor="fileUpload" className="fileUploadLabel">
//                         <FaImage className="uploadIcon" /> Upload Image
//                     </label>
//                     <input id="fileUpload" type="file" onChange={handleImageChange} className="fileInput" />
//                 </div>
//                 {image && <img src={image} alt="Preview" className="imagePreview" />}
//                 <button type="submit" className="submitPostButton">Post</button>
//             </form>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { FaImage, FaVideo, FaCalendar, FaSmile } from 'react-icons/fa';
import './createPost.css';

export default function CreatePost() {
    const [postText, setPostText] = useState('');
    const [image, setImage] = useState(null);
    const [isFileInputVisible, setIsFileInputVisible] = useState(false);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setIsFileInputVisible(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ postText, image });
        alert('Post created successfully!');
        setPostText('');
        setImage(null);
        setIsFileInputVisible(false);
    };

    return (
        <div className="createPostContainer">
            <div className="inputSection">
                <img
                    alt="Profile picture placeholder"
                    className="profilePic"
                    src="https://storage.googleapis.com/a1aa/image/uCIrImkmPeQKP6edkXxGitQwxJ6eia1vNHm3Al2TYtcEt8nnA.jpg"
                    width="60"
                    height="60"
                />
                <input
                    className="postInput"
                    placeholder="What do you want to talk about?"
                    type="text"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
            </div>

            <div className="optionsRow">
                <label className="optionLabel" htmlFor="fileUpload">
                    <FaImage /> Photo
                </label>
                <label className="optionLabel">
                    <FaVideo /> Video
                </label>
                <label className="optionLabel">
                    <FaCalendar /> Event
                </label>
                <label className="optionLabel">
                    <FaSmile /> Write article
                </label>
            </div>

            {isFileInputVisible && (
                <form className="fileUploadForm" onSubmit={handleSubmit}>
                    <input
                        className="fileInput"
                        id="fileUpload"
                        type="file"
                        onChange={handleImageChange}
                    />
                    {image && (
                        <img
                            alt="Preview of the uploaded image"
                            className="imagePreview"
                            src={image}
                        />
                    )}
                    <button
                        className="submitPostButton"
                        type="submit"
                        disabled={!postText && !image}
                    >
                        Post
                    </button>
                </form>
            )}
        </div>
    );
}
