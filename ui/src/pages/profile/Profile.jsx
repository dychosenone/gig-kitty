import "./profile.css";
import Topnav from "../../components/topnav/Topnav";
import Sidenav from "../../components/sidenav/Sidenav";
import Feed from "../../components/feed/Feed";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/api/users/${username}`);
      setUser(res.data);
    };
    fetchUser();
}, [username])

  // http://localhost:3000/api/users?userId=${post.userId}

  
  return (
    <>
      <Topnav />
      <div className="profile-container">
        <Sidenav />
        <div className="profile-content-wrapper">
          <div className="profile-content-top">
            <div className="profile-cover">
              <img
                className="profile-cover-img"
                src={user.coverPicture || PF+"person/display-banner.jpg"}
                alt="profile-banner"
              />
              <img
                className="profile-user-pfp"
                src={user.profilePicture || PF+"person/display-avatar.jpg"}
                alt="profile-dp"
              />
            </div>
            <div className="profile-info">
                <h4 className="profile-username">{user.username}</h4>
                <span className="profile-bio">{user.desc}</span>
            </div>
          </div>
          <div className="profile-content">
            <Feed username={username}/>
          </div>
        </div>
      </div>
    </>
  );
}
