import React, { useEffect, useState } from "react";
import RightBar from "../../components/rightBar/RightBar.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import TopBar from "../../components/topBar/TopBar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./Profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState({});
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?username=${params.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [params.username]);

  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || "/assets/post/2.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture || "/assets/person/2.jpeg"}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={params.username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
