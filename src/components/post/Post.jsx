import React, { useState, useEffect, useContext } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData.js";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Post({ data }) {
  const [like, setLike] = useState(data.likes.length);
  const [isLike, setIsLike] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/user?userId=${data.userId}`
      );
      console.log(res);
      setUser(res.data);
    };
    fetchUser();
  }, [data.userId]);

  useEffect(() => {
    setIsLike(data.likes.includes(currentUser?._id));
  }, [data.likes, currentUser?._id]);

  const likeHandler = async () => {
    await axios.put("http://localhost:3001/api/posts/" + data._id + "/like", {
      userId: currentUser?._id,
    });
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "/person/1.jpeg"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(data.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{data.desc}</span>
          <img src={PF + data.img} alt="" className="postImg" />
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
