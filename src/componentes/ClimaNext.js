import React, { useEffect, useState } from "react";
import styles from "./climaNext.module.css";
import DiaNext from "./DiaNext";

const apiKey = "5ff77aabd578e751dba4629a09f50d44";

const ClimaNext = ({ ciudad, pais }) => {
  const [pronostico, setPronostico] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${apiKey}&units=metric&lang=esp`
    )
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              error: true,
              status: res.status || "Status 00",
              statusText: res.statusText || "Ocurrio un Error",
            })
      )
      .then((data) => {
        console.log(data.list);
        return setPronostico(data.list);
      })
      .catch((error) => error);
  }, [ciudad, pais]);
  return (
    <div className={styles.div}>
      <ul className={styles.containerNext}>
        {pronostico ? (
          pronostico
            .slice(1, 23)
            .map((el, index) => (
              <DiaNext key={index} datoDia={el} index={index}></DiaNext>
            ))
        ) : (
          <h2>esperando Datos...</h2>
        )}
      </ul>
    </div>
  );
};

export default ClimaNext;
