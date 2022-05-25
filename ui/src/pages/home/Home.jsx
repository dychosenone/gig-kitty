import Topnav from "../../components/topnav/Topnav";
import Sidenav from "../../components/sidenav/Sidenav";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Desinesystem from "../../pages/designfreakinsystem/Desinesystem";


import './home.css';

export default function Home() {
  return (
    <>
      <Topnav />
      {/* <Desinesystem /> */}
      <div className="home-container">
        <Sidenav />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}
