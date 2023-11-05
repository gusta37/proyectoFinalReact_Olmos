import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  writeBatch,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Checkout.css'

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, SetOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: new Date(),
      };
      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "items");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productsAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        SetOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos que están fuera de stock");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="container is-fluid">
      <h1 className="checkoutTitle">Checkout</h1>
      {loading ? (
        <h2 className="is-size-3-desktop p-5">Se está generando su orden...</h2>
      ) : orderId ? (
        <div>
          <h2 className="is-size-3-desktop p-5">¡Gracias por tu compra!</h2>
          <p className="is-size-5-desktop p-5">
            Tu número de orden es: <span>{orderId}</span>
          </p>
          <Link className="btn button mb-5 is-large is-responsive is-primary is-outlined" to="/">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <CheckoutForm onConfirm={createOrder} />
      )}
    </div>
  );
};

export default Checkout;
