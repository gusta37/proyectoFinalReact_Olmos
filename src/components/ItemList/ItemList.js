import "./ItemList.css";
import Item from "../Item/Item.js";

function ItemList({ products }) {

  return (
    <div>
      <h2 className="has-text-white has-background-primary my-5 p-5 is-size-2-desktop">
        🌸 🌻 🌹 PROMOCIÓN PRIMAVERA - 20% OFF 🌹 🌻 🌸
      </h2>

      <div className="ListGroup card-header is-flex is-justify-content-center is-flex-wrap-wrap my-5">

        {Array.isArray(products) && products.length > 0 ? (
          products.map((prod) => {
            return <Item key={prod.id} {...prod} />;
          })
        ) : (
          <p>BUSCANDO PRODUCTOS...</p>
        )}

      </div>
    </div>
  );
}

export default ItemList;
