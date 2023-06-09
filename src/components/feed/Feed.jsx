import React, { useState, useEffect, useContext } from "react";
import Share from "../share/Share";
import "./Feed.css";
import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("http://localhost:3001/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:3001/api/posts/timeline/" + user?._id
          );
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPost();
  }, [username, user?._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user?.username) && <Share />}
        {posts.map((post) => {
          return <Post key={post._id} data={post} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
