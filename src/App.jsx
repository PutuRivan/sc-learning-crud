import { Route, Routes } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct";
import AuthLayout from "./layout/AuthLayout";
import AuthHome from "./pages/auth/AuthHome";
import AuthCreate from "./pages/auth/AuthCreate";
import AuthUpdate from "./pages/auth/AuthUpdate";
import AuthDelete from "./pages/auth/AuthDelete";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="tambah-data" element={<CreateProduct />} />
        <Route path="edit-data/:id" element={<UpdateProduct />} />
        <Route path="hapus-data/:id" element={<DeleteProduct />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="get-data" element={<AuthHome />} />
        <Route path="tambah-data" element={<AuthCreate />} />
        <Route path="update-data/:id" element={<AuthUpdate />} />
        <Route path="delete-data/:id" element={<AuthDelete />} />
      </Route>
    </Routes>
  )
}
