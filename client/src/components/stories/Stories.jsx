import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./stories.scss";

function Stories() {
  const { currentUser } = useContext(AuthContext);
  //TEMPORARY

  const stories = [
    {
      id: 1,
      name: "NPoet",
      img: "https://i.pinimg.com/564x/4a/93/ae/4a93ae0e9fbf96e68a84b4fad16ef748.jpg",
    },
    {
      id: 2,
      name: "NPoet",
      img: "https://i.pinimg.com/564x/4a/93/ae/4a93ae0e9fbf96e68a84b4fad16ef748.jpg",
    },
    {
      id: 3,
      name: "NPoet",
      img: "https://i.pinimg.com/564x/4a/93/ae/4a93ae0e9fbf96e68a84b4fad16ef748.jpg",
    },
    {
      id: 4,
      name: "NPoet",
      img: "https://i.pinimg.com/564x/4a/93/ae/4a93ae0e9fbf96e68a84b4fad16ef748.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
