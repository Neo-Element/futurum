import { Navigate, Route, Routes } from "react-router";

import NotFound from "./commons/NotFound";

import ShoppingCart from "./components/ShoppingCart"

import React from "react"; 

import Grid from "./commons/Grid";


function App() {
  return (
    <div>
      {/* NAVBAR */}
      <div>
      {/* SIDEBAR */}
      <Routes>
        {/* LAS RUTAS NO ESTAN DINAMIZADAS POR AHORA */}
        <Route path="/" element={<h1>FUTURUM</h1>} />
        <Route path="/admin/login" element={<h1>LOGIN DE ADMINISTRADOR</h1>} />
        <Route path="/users/register" element={<h1>REGISTRO DE USUARIO</h1>} />
        <Route path="/users/login" element={<h1>LOGUIN DE USUARIO</h1>} />
        <Route path="/admin" element={<h1>VISTAS ADMINISTRADOR</h1>} />
        <Route path="/admin/products/:type" element={<Grid />} />
        <Route path="/admin/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} />
        <Route path="/admin/users" element={<h1>VISTAS DE USUARIOS</h1>} />
        <Route path="/admin/users/:id" element={<h1>VISTAS DE UN USUARIO PARTICULAR</h1>} />
        <Route path="/users" element={<h1>VISTAS USUARIO</h1>} />
        <Route path="/users/products/:type" element={<Grid />} />
        <Route path="/users/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} />
        <Route path="/guest" element={<h1>VISTAS DE USUARIOS NO LOGUEADOS</h1>} />
        <Route path="/guest/products/:type" element={<Grid />} />
        <Route path="/guest/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} />
        <Route path="*" element={<Navigate to="404" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/users/:id/cart/" element={<ShoppingCart />}/>
      </Routes>
    </div>
      {/* FOOTER */}
    </div>
  );
}

export default App;
