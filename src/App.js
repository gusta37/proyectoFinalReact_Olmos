import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import Footer from './components/Footer/Footer.js'
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />         
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'🙋‍♀️ Bienvenidos 🙋‍♂️'}/>}/> 
          {/* Muestra todos los productos */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          {/* Muestra por categorias */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          {/* Muestra detalle del producto */}
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          {/* muestra un mje de error si no funcionan las rutas anteriores */}
        </Routes>        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
