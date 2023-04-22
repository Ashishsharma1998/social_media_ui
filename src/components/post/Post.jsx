import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData.js";

function Post({ data }) {
  const [like, setLike] = useState(data.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === data.userId)[0]
                  .profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === data.userId)[0].username}
            </span>
            <span className="postDate">{data.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{data.desc}</span>
          <img src={data.photo} alt="" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <img
              src="/assets/heart.png"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{data.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
