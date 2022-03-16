import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router";
import NotFound from "./commons/NotFound";
import ShoppingCart from "./components/ShoppingCart"
import Grid from "./commons/Grid";
import Login from "./commons/Login";
import Register from "./commons/Register";
import SingleCourse from "./components/SingleCourse";
import Footer from "./commons/Footer";
import Team from "./commons/Team";
import AdminPanel from "./admin/AdminPanel";
import AddProduct from "./commons/AddProduct";
import AddCategory from "./commons/AddCategory";
import AdminCategory from "./admin/AdminCategories";
import Category from "./components/Category";
import Welcome from "./components/Welcome";
import HomeUsers from "./components/HomeUsers";
import HomeAdmin from "./admin/HomeAdmin";
import { useDispatch, useSelector } from "react-redux";
import { persistence } from "./store/users";




function App() {
const user = useSelector(state => state.user);
const dispatch = useDispatch();
useEffect(()=>{
  if(localStorage.getItem("user")){
    dispatch(
      persistence()
    )
    }
},[])
  return (

    <div>
      <NavBar/>
      <div>
      <Routes>
        {/* LAS RUTAS NO ESTAN DINAMIZADAS POR AHORA */}
        {/* HOME Y REGISTER */}
        <Route path="/" element={<Welcome />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/login" element={<Login />} />

        {/* RUTAS ADMINISTRADOR */}
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/products" element={<AdminPanel />} />
        <Route path="/admin/products/add" element={<AddProduct/>} />
        <Route path="/admin/products/:id" element={<SingleCourse/>} />
        <Route path="/admin/users" element={<h1>VISTAS DE USUARIOS</h1>} />
        <Route path="/admin/users/:id" element={<h1>VISTAS DE UN USUARIO PARTICULAR</h1>} />
        <Route path="/admin/categories" element={<AdminCategory />} />
        <Route path="/admin/categories/add" element={<AddCategory/>} />
        <Route path="/admin/categories/:id" element={<AddCategory/>} />

        {/* RUTAS USUARIOS */}
        <Route path="/users" element={<HomeUsers />} />
        <Route path="/users/products" element={<Grid />} />
        <Route path="/users/products/:id" element={<SingleCourse/>} />
        <Route path="/users/categories/:id" element={<Category />} />
        <Route path="/users/:id/cart/" element={<ShoppingCart />}/>

        {/* RUTAS INVITADOS */}
        <Route path="/guest" element={<HomeUsers />} />
        <Route path="/guest/products" element={<Grid />} />
        <Route path="/guest/products/:id" element={<SingleCourse/>} />
        <Route path="/guest/categories/:id" element={<Category />} />
        <Route path="/guest/cart" element={<ShoppingCart />} />

        {/* RUTAS ERROR */}
        <Route path="*" element={<Navigate to="404" />} />
        <Route path="/404" element={<NotFound />} />

        {/* RUTA TEAM */}
        <Route path="/team" element={<Team />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
