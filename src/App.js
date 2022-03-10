import { Route, Routes } from "react-router";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<h1>FUTURUM</h1>} />
      </Routes>
    </div>
  );
}

export default App;
 