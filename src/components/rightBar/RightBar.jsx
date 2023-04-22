import React from "react";
import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ujjwal das</b> and <b> 3 other friends</b> have birthday today.
          </span>
        </div>

        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default RightBar;
