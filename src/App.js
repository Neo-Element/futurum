import { Route, Routes } from "react-router";

import React from "react"; 

import Grid from "./commons/Grid";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>FUTURUM</h1>} />
        <Route path="/courses" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
