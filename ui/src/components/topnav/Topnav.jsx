import "./topnav.css"
import Logo from "./assets/topnav-logo.png"
import pfp from "./assets/kianna.jpg"

export default function Topnav() {
  return (
    <div className="topnav-container">
        <div>
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="profile-container">
          <div className="profile-wrapper">
            <div>
              <img src={pfp} alt="profile" id="topnav-pfp"/>
            </div>
            <p className="profile-image-text">Kianna</p>
          </div>
        </div>
    </div>
  )
}
