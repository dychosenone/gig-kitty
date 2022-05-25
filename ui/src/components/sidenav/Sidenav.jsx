import FeedIcon from "./icons/feed-icon.svg";
import ForumIcon from "./icons/forum-icon.svg";
import HeartIcon from "./icons/heart-icon.svg";
import FireIcon from "./icons/fire-icon.svg";
import SettingsIcon from "./icons/settings-icon.svg";
import Search from "./icons/search-icon.svg";

import './sidenav.css';

export default function Sidenav() {
  return (
    <div className="sidenav-container">
        <div className="sidenav-wrapper">
            <div className="searchbar">
                <img src={Search} id="search" alt="search"/>
                <input
                    placeholder="Search"
                    className="search-input"
                />
            </div>

            {/* fix the hover designs for the links */}
            <div className="sidenav-links">
                <div className="sidenav-link">
                    <img src={FeedIcon} alt="" id="feed icon"/>
                    <p className="sidenav-text">Feed</p>
                </div>
                <div className="sidenav-link">
                    <img src={ForumIcon} alt="" id="forum icon"/>
                    <p className="sidenav-text">Forum</p>
                </div>
                <div className="sidenav-link">
                    <img src={HeartIcon} alt="" id="heart icon"/>
                    <p className="sidenav-text">Liked</p>
                </div>
                <div className="sidenav-link">
                    <img src={FireIcon} alt="" id="fire icon"/>
                    <p className="sidenav-text">Activities</p>
                </div>
                <div className="sidenav-link">
                    <img src={SettingsIcon} alt="" id="settings icon"/>
                    <p className="sidenav-text">Settings</p>
                </div>
            </div>
        </div>
    </div>
  )
}
