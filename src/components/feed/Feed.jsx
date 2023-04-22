import React from "react";
import Share from "../share/Share";
import "./Feed.css";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} data={post} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
