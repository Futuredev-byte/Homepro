/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";

const FormCard = ({
  title,
  subtitle,
  isLoginBtn = true,
  toggleForm,
  loading,
}) => {


  return (
    <div className="">
    { isLoginBtn ? <Login/> : <Register/>}
    </div>
  );
};

export default FormCard;