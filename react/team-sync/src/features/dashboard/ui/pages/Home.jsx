import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const Home = () => {
  let dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
    console.log("hello");
  };

  return (
    <div>
      <h1>This is my dashboard home page</h1>
      <button onClick={handleChangeTheme}>Change theme</button>
    </div>
  );
};

export default Home;
