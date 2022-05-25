import "./profile.css";
import Topnav from "../../components/topnav/Topnav";
import Sidenav from "../../components/sidenav/Sidenav";
import Feed from "../../components/feed/Feed";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
                src={`${PF}post/12.jpg`}
                alt="profile-banner"
              />
              <img
                className="profile-user-pfp"
                src={`${PF}person/2.jpg`}
                alt="profile-dp"
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
