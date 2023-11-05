import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import Footer from "./components/Footer/Footer.js";
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from './components/Cart/Cart.js';
import Checkout from './components/Checkout/Checkout.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"🙋‍♀️ Bienvenidos 🙋‍♂️"} />}
            />
            {/* Muestra todos los productos */}
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            {/* Muestra por categorias */}
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            {/* Muestra detalle del producto */}
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
            {/* muestra un mje de error si no funcionan las rutas anteriores */}
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
