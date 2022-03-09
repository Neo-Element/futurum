import { Navigate, Route, Routes } from "react-router";

import NotFound from "./commons/NotFound";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <div>
      {/* SIDEBAR */}
      <Routes>
        {/* LAS RUTAS NO ESTAN DINAMIZADAS POR AHORA */}
        <Route path="/" element={<h1>FUTURUM</h1>} />
        <Route path="/admin" element={<h1>VISTAS ADMINISTRADOR</h1>} />
        <Route path="/admin/products/:type" element={<h1>VISTAS DE CURSOS</h1>} />
        <Route path="/admin/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} />
        <Route path="/admin/users" element={<h1>VISTAS DE USUARIOS</h1>} />
        <Route path="/admin/users/:id" element={<h1>VISTAS DE UN USUARIO PARTICULAR</h1>} />
        <Route path="/users" element={<h1>VISTAS USUARIO</h1>} />
        <Route path="/users/products/:type" element={<h1>VISTAS DE CURSOS</h1>} />
        <Route path="/users/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} />
        <Route path="/guess" element={<h1>VISTAS DE USUARIOS NO LOGUEADOS</h1>} />
        <Route path="/guess/products/:type" element={<h1>VISTAS DE CURSOS</h1>} />
        <Route path="/guess/products/:type/:id" element={<h1>VISTAS DE UN CURSO PARTICULAR</h1>} />
        <Route path="*" element={<Navigate to="404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
      {/* FOOTER */}
    </div>
  );
}

export default App;
 