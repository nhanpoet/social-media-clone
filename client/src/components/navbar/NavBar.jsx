import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function NavBar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [openLogout, setOpenLogout] = useState(false);

  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const { logout } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>NPoetSocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <DarkModeOutlinedIcon onClick={toggle} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        <div className="user">
          <img
            onClick={() => setOpenLogout(!openLogout)}
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />
          {openLogout && currentUser.id && (
            <button onClick={handleLogout}>logout</button>
          )}
          <Link
            to={`/profile/${currentUser.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
