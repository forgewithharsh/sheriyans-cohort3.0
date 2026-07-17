import React from "react";
import { Outlet, useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>This is About section.</h1>
      <button onClick={() => navigate("/about/nested")}>Redirect</button>
      <Outlet />
    </div>
  );
};

export default About;
