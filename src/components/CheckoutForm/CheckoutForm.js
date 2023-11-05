import React from "react";
import { useState } from "react";
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="container is-fluid">
      <form onSubmit={handleConfirm} className="form">
        <label className="label p-2 m-5">
            <p className="has-background-primary m-3 p-2">Nombre</p>
          <input
            className="input is-primary"
            type="text"
            value={name}
            placeholder="Coloca tu nombre aquí"
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="label p-2 m-5">
          <p className="has-background-primary m-3 p-2">Teléfono</p>
          <input
            className="input is-primary"
            type="text"
            value={phone}
            placeholder="Coloca tu teléfono aquí"
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="label p-2 m-5">
          <p className="has-background-primary m-3 p-2">Email</p>
          <input
            className="input is-primary"
            type="email"
            value={email}
            placeholder="Coloca tu email aquí"
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <button
          type="submit"
          className="btn button m-5 is-large is-responsive is-primary is-outlined"
        >
          Crear Orden
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
