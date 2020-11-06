import React, { Component, useState } from "react";
import "../styles/App.css";
import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";

const App = () => {
  return (
    <div>
      <FirstProject />
      <SecondProject />
    </div>
  );
};

export default App;
