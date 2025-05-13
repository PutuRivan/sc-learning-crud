import { Route, Routes } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct";
import AuthLayout from "./layout/AuthLayout";

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
        <Route path="get-data" element/>
        <Route path="tambah-data" element />
        <Route path="update-data/:id" element />
        <Route path="delete-data/:id" element />
      </Route>
    </Routes>
  )
}
