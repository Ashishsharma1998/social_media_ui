import React, { useState, useEffect } from "react";
import Share from "../share/Share";
import "./Feed.css";
import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import axios from "axios";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("http://localhost:3001/api/posts/profile/" + username)
        : await axios.get("/posts/timeline/641de514afe0f27e1e8ead5e");
      setPosts(res.data);
    };
    fetchPost();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => {
          return <Post key={post._id} data={post} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
