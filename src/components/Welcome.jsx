import React from 'react';
import { Link } from "react-router-dom";

import imageUser from "../assets/users.png";
import imageAdmin from "../assets/admin.jpeg";
import imageGuest from "../assets/guest.png";

const Welcome = () => {
  return (
    <div className="grid">
      <div className="singleCard">
      <div>
          <div className="image">
          <img
            src={imageAdmin}
            alt="admin logo"
            style={{ width: "118px", height: "118px" }}
          />
          </div>
          <h1>
          ADMIN
          </h1>
          <Link to="/admin/login" className="link">
          <button
              type="submit"
              className="btn btn-lg btn-dark borderMark"
            >
              <span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Signin
            </button>
          </Link>
        </div>
    </div>
    <div className="singleCard">
      <div>
          <div className="image">
          <img
            src={imageUser}
            alt="user logo"
            style={{ width: "118px", height: "118px" }}
          />
          </div>
          <h1>
          USERS
          </h1>
          <Link to="/users/login" className="link">
          <button
              type="submit"
              className="btn btn-lg btn-dark borderMark"
            >
              <span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Welcome
            </button>
          </Link>
        </div>
    </div>
    <div className="singleCard">
      <div>
          <div className="image">
          <img
            src={imageGuest}
            alt="guest logo"
            style={{ width: "118px", height: "118px" }}
          />
          </div>
          <h1>
          GUEST
          </h1>
         <Link to="/" className="link">
         <button
              type="submit"
              className="btn btn-lg btn-dark borderMark"
            >
              <span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Join
            </button>
         </Link>
        </div>
    </div>
    </div>
  )
}

export default Welcome