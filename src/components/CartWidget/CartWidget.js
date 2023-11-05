import cart from "./assets/mbrishoppingcart_99558.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="cartW"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <div className="is-flex is-justify-content-center is-align-items-center">
        <img className="cartImg" src={cart} alt="cart-widget" />
        <p className="prodCounter">{totalQuantity}</p>
      </div>
      <div>
        <p className="pb-5">Ver Carrito</p>
      </div>
    </Link>
  );
};

export default CartWidget;
