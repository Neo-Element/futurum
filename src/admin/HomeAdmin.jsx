import React from 'react';
import { Link } from "react-router-dom";

import imageUser from "../assets/user.svg";
import imageCat from "../assets/category.jpeg";
import imageProd from "../assets/products.png";

const HomeAdmin = () => {
  return (
    <div className="grid">
      <div className="singleCard">
      <div>
          <div className="image">
          <img
            src={imageUser}
            alt="admin logo"
            style={{ width: "118px", height: "118px" }}
          />
          </div>
          <h1>
          USERS
          </h1>
          <Link to="/admin/users" className="link">
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
              Config Users
            </button>
          </Link>
        </div>
    </div>
    <div className="singleCard">
      <div>
          <div className="image">
          <img
            src={imageCat}
            alt="user logo"
            style={{ width: "118px", height: "118px" }}
          />
          </div>
          <h1>
          CATEGORIES
          </h1>
          <Link to="/admin/categories" className="link">
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
              Config Categories
            </button>
          </Link>
        </div>
    </div>
    <div className="singleCard">
      <div>
          <div className="image">
          <img
            src={imageProd}
            alt="guest logo"
            style={{ width: "118px", height: "118px" }}
          />
          </div>
          <h1>
          PRODUCTS
          </h1>
         <Link to="/admin/products" className="link">
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
              Config Products
            </button>
         </Link>
        </div>
    </div>
    </div>
  )
}

export default HomeAdmin;