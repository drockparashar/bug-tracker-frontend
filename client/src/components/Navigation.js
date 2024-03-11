import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigation=useNavigate();
  return (
    <>
      <nav id="menu" className=" flex">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

    </>
  );
};

export default Navigation;
