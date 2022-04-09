import { React, Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../Contexts/user.context";

import { signOutUser } from "../../Firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import "./navbar.styles.css";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {
            currentUser ? (
              <span className="option" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="option" to="/auth">
                SIGN IN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
  </Fragment>
  )
};

export default NavBar;