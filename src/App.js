import { Route, Routes } from "react-router";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>FUTURUM</h1>} />
      </Routes>
    </div>
  );
}

export default App;
