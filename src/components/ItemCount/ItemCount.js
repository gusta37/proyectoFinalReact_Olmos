import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter is-flex-mobile m-5 is-justify-content-center">
      <div className="controls">
        <button className="btn button m-2 is-normal is-responsive is-white is-outlined" onClick={decrement}>
          -
        </button>

        <h4 className="number mx-0 mt-2 is-size-6 has-background-white has-text-primary is-responsive">{quantity}</h4>

        <button className="btn button m-2 is-normal is-responsive is-white is-outlined" onClick={increment}>
          +
        </button>
      </div>

      <div className="agregar">
        <button className="btn button m-2 is-medium is-responsive is-white is-outlined" onClick={()=>onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
