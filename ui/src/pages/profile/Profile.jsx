import "./profile.css";
import Topnav from "../../components/topnav/Topnav";
import Sidenav from "../../components/sidenav/Sidenav";
import Feed from "../../components/feed/Feed";

export default function Profile() {
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
                src=""
                alt=""
              />
              <img
                className="profile-user-pfp"
                src=""
                alt=""
              />
            </div>
            <div className="profile-info">
                <h4 className="profile-username">First Name</h4>
                <span className="profile-bio">gm gm gm wagmi fr fr lfg</span>
            </div>
          </div>
          <div className="profile-content">
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}
