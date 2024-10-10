// AuthForm.js
import React, { useState } from "react";
import Register from "./register";
import Login from "./login";

const AuthForm = ({ loading }) => {
  const [isLogin, setIsLogin] = useState(false);

  // Function to toggle form
  const handleToggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="">
      {isLogin ? (
        <Login  toggleModal={handleToggleForm} /> 
      ) : (
        <Register toggleModal={handleToggleForm} /> 
      )}
    </div>
  );
};

export default AuthForm;