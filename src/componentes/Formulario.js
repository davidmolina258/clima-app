import React, { useState } from "react";
import styles from "./formulario.module.css";

const Formulario = ({ setPais, setCiudad }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);

  const handleSubmit = (e) => {
    if (city) {
      e.preventDefault();
      setCiudad(city);
      setPais(country);
    } else {
      e.preventDefault();
      alert("Debes ingresar una ciudad");
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Ingrese ciudad"
          name="ciudad"
          onChange={handleCity}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Ingrese Pais"
          name="pais"
          onChange={handleCountry}
        />
        <button className={styles.boton}>Buscar</button>
      </form>
    </div>
  );
};

export default Formulario;
