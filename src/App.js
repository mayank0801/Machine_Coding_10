import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import AddNewProduct from "./Page/AddNewProduct";
import DashBoard from "./Page/DashBoard";
import Departement from "./Page/Department";
import ProductDetail from "./Page/ProductDetail";
import Products from "./Page/Products";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/department" element={<Departement />} />

          <Route path="/newproduct" element={<AddNewProduct />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}
