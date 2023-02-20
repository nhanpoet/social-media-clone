import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://photo2.tinhte.vn/data/attachment-files/2021/09/5660152_city_road_buildings_188197_3840x2160.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookTwoToneIcon size={48} />
            </a>
            <a href="https://www.facebook.com/">
              <LinkedInIcon size={48} />
            </a>
            <a href="https://www.facebook.com/">
              <InstagramIcon size={48} />
            </a>
            <a href="https://www.facebook.com/">
              <PinterestIcon size={48} />
            </a>
            <a href="https://www.facebook.com/">
              <TwitterIcon size={48} />
            </a>
          </div>
          <div className="center">
            <span>NPoet</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>VietNam</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>NPoet.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
