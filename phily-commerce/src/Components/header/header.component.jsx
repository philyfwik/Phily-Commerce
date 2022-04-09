import { React, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { auth } from "../../Firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";

import "./header.styles.css";

const Header = ({ currentUser }) => (
  <Fragment>
    <div className="header">
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
          currentUser ? 
          (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
          :
          (<Link className="option" to="/signin">SIGN IN</Link>)
        }
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default Header;