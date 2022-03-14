import React from "react";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router";
import NotFound from "./commons/NotFound";
import ShoppingCart from "./components/ShoppingCart"
import Grid from "./commons/Grid";
import Login from "./commons/Login";
import Register from "./commons/Register";
import SingleCourse from "./components/SingleCourse";


function App() {
  return (

    <div>
      <NavBar/>
      <div>
      <Routes>
        {/* LAS RUTAS NO ESTAN DINAMIZADAS POR AHORA */}
        {/* HOME Y REGISTER */}
        <Route path="/" element={<h1>FUTURUM</h1>} />
        <Route path="/admin/login" element={<h1>LOGIN DE ADMINISTRADOR</h1>} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/login" element={<Login />} />

        {/* RUTAS ADMINISTRADOR */}
        <Route path="/admin" element={<h1>VISTAS ADMINISTRADOR</h1>} />
        <Route path="/admin/products/:type" element={<Grid />} />
        <Route path="/admin/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} />
        <Route path="/admin/users" element={<h1>VISTAS DE USUARIOS</h1>} />
        <Route path="/admin/users/:id" element={<h1>VISTAS DE UN USUARIO PARTICULAR</h1>} />

        {/* RUTAS USUARIOS */}
        <Route path="/users" element={<h1>VISTAS USUARIO</h1>} />
        <Route path="/users/products" element={<Grid />} />
        <Route path="/users/products/:id" element={<SingleCourse/>} />
        <Route path="/users/:id/cart/" element={<ShoppingCart />}/>
        {/* <Route path="/users/products/:type" element={<Grid />} />
        <Route path="/users/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} /> */}

        {/* RUTAS INVITADOS */}
        <Route path="/guest" element={<h1>VISTAS DE USUARIOS NO LOGUEADOS</h1>} />
        <Route path="/guest/products/:type" element={<Grid />} />
        <Route path="/guest/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} />

        {/* RUTAS ERROR */}
        <Route path="*" element={<Navigate to="404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
