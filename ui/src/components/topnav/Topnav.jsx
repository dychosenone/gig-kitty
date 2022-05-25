import "./topnav.css"
import Logo from "./assets/topnav-logo.png"
import pfp from "./assets/kianna.jpg"
import { Link } from "react-router-dom"

export default function Topnav() {
  return (
    <div className="topnav-container">
        <Link to="/">
          <img src={Logo} alt="Logo"/>
        </Link>
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
