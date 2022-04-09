import React from "react";

import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";

import "./authentication.styles.css";

const Authentication = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);

export default Authentication;