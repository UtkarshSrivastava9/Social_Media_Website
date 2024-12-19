// import "./post.css"
// import { MoreVert } from "@mui/icons-material";
// import { Users } from "../../dummyData";
// import { useState } from "react";

// export default function Post({post}){
//     const [like,setLike] = useState(post.like)
//     const [isLiked,setisLiked] = useState(false)
//     const likeHandler=()=>{
//         setLike(isLiked ? like-1 : like+1)
//         setisLiked(!isLiked)
//     }
//     return (
//         <div className="post">
//             <div className="postWrapper">
//                 <div className="postTop">
//                     <div className="postTopLeft">
//                         <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt=""/>
//                         <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
//                         <span className="postDate">{post?.date}</span>
//                     </div>
//                     <div className="postTopRight">
//                         <MoreVert/>
//                     </div>
//                 </div>
//                 <div className="postCenter">
//                     <span className="postText">{post?.desc}</span>
//                     <img className="postImg" src={post.photo} alt=""/>
//                 </div>
//                 <div className="postBottom">
//                     <div className="postBottomLeft">
//                         <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt=""/>
//                         <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt=""/>
//                         <span className="postLikeCounter">{like} people liked it</span>

//                     </div>
//                     <div className="postBottomRight">
//                         <span className="postCommentText">{post.comment} comments</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    "Great post!",
    "Love this picture!",
    "Awesome content, keep it up!",
  ]);
  const [newComment, setNewComment] = useState("");

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comments.length} comments</span>
          </div>
        </div>

        {/* Comment Section */}
        <div className="postComments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <span>{comment}</span>
            </div>
          ))}
          <div className="commentInputWrapper">
            <input
              type="text"
              className="commentInput"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="commentButton" onClick={addComment}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
