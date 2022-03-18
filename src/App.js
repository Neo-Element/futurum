import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router";
import NotFound from "./commons/NotFound";
import ShoppingCart from "./components/ShoppingCart";
import Grid from "./commons/Grid";
import Login from "./commons/Login";
import Register from "./commons/Register";
import SingleCourse from "./components/SingleCourse";
import Footer from "./commons/Footer";
import Team from "./commons/Team";
import AdminCourses from "./admin/AdminCourses";
import AddProduct from "./admin/AddProduct";
import AddCategory from "./commons/AddCategory";
import AdminCategory from "./admin/AdminCategories";
import Category from "./components/Category";
import Welcome from "./components/Welcome";
import HomeUsers from "./components/HomeUsers";
import HomeAdmin from "./admin/HomeAdmin";
import { useDispatch, useSelector } from "react-redux";
import { persistence } from "./store/singleUser";
import CheckOut from "./components/Checkout";
import SideBar from "./components/SideBar";
import AdminUser from "./admin/AdminUser";
import EditCourse from "./admin/EditCourse";
import ShoppingHistory from "./components/ShoppingHistory";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(persistence());
  }, []);
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="row">
        <Routes>
          {/* LAS RUTAS NO ESTAN DINAMIZADAS POR AHORA */}
          {/* HOME Y REGISTER */}
          <Route path="/" element={<HomeUsers/>} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />

          {/* RUTAS ADMINISTRADOR */}
          <Route path="/admin/products" element={<AdminCourses />} />
          <Route path="/admin/products/add" element={<AddProduct />} />
          <Route path="/admin/products/:id" element={<SingleCourse />} />
          <Route path="/admin/products/edit/:id" element={<EditCourse />} />
          <Route path="/admin/users" element={<AdminUser />} />

          <Route path="/admin" element={<HomeAdmin />} />

          <Route path="/admin/categories" element={<AdminCategory />} />
          <Route path="/admin/categories/add" element={<AddCategory />} />
          <Route path="/admin/categories/:id" element={<Category />} />
          <Route path="/admin/categories/edit/:id" element={<AddCategory />} />

          {/* RUTAS USUARIOS */}
          <Route path="/users" element={<HomeUsers />} />
          <Route path="/users/products" element={<Grid />} />
          <Route path="/users/products/:id" element={<SingleCourse />} />
          <Route path="/users/categories/:id" element={<Category />} />
          <Route path="/users/cart/" element={<ShoppingCart />} />
          <Route path="/users/cart/:id" element={<CheckOut />} />
          <Route path="/users/my_courses/" element={<ShoppingHistory />} />

          {/* RUTAS ERROR */}
          <Route path="*" element={<Navigate to="404" />} />
          <Route path="/404" element={<NotFound />} />


        {/* RUTA TEAM */}
        <Route path="/team" element={<Team />} />
      </Routes>
      </div>
      <Footer/>
      </>
  );
}

export default App;
