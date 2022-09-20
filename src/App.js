import React from "react";
import { Route, Routes } from "react-router-dom";
import Workout from "./components/SamplePages/Workout";
import Nutritionpage from "./components/SamplePages/Nutritionpage";
import Main from "./components/Main";

import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:uid/workout" element={<Workout/>} />
      <Route path="/:uid/nutrition" element={<Nutritionpage/>} />
    </Routes>
  );
};

export default App;
