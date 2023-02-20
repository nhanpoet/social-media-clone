import "./rightbar.scss";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <span>NPoet</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <span>NPoet</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <p>
                <span>NPoet</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <p>
                <span>NPoet</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <p>
                <span>NPoet</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <p>
                <span>NPoet</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <div className="online"></div>
              <span>NPoet</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <div className="online"></div>
              <span>NPoet</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <div className="online"></div>
              <span>NPoet</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/63/a4/0a/63a40a47922a3f48fe07134293af8478.jpg"
                alt=""
              />
              <div className="online"></div>
              <span>NPoet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
