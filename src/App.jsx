import { Routes, Route } from "react-router-dom";
import Carrito from "./views/Carrito";
import Checkout from "./views/Checkout";
import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Producto from "./views/Producto";
import Perfil from "./views/Perfil";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="producto/:id" element={<Producto />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
