import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem.js";
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total, removeItem } =
    useContext(CartContext);
    const formattedTotal = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(total);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1 className="m-5 is-size-3">🤷‍♂️ AGREGAR PRODUCTOS 🤷‍♀️</h1>
        <Link to="/" className="btn button m-5 is-large is-responsive is-primary is-outlined">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            quantity={item.quantity}
            removeItem={removeItem}
          />
        ))}
      </div>

      <h1 className="CartTotal">Total {formattedTotal}</h1>

      <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <button className="btn button m-5 is-large is-responsive is-primary is-outlined" onClick={() => clearCart()}>Limpiar carrito</button>
        <Link to="/checkout" className="btn button mb-5 is-large is-responsive is-primary is-outlined">Checkout</Link>
        <Link
          to="/"
          className="btn button mb-5 is-medium is-responsive is-primary is-outlined"
        >
          Volver
        </Link>
      </div>
    </div>
  );
};

export default Cart;
