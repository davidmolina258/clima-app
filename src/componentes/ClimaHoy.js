import React, { useEffect, useState } from "react";
import styles from "./climaHoy.module.css";
import Loader from "./Loader";

let now = new Date().toLocaleTimeString();
let dia = new Date().toDateString();

const ClimaHoy = ({ clima, pronostico }) => {
  const [hora, setHora] = useState(now);
  const [day, setDay] = useState(dia);
  let url = "https://api.openweathermap.org/img/w/";
  let arch = ".png";

  useEffect(() => {
    setInterval(() => {
      let newtime = new Date().toLocaleTimeString();
      setHora(newtime);
    }, 1000);
  }, [hora]);

  return (
    <div className={styles.container}>
      <div>
        <article className={styles.hora}>
          <h2>TIME: {hora}</h2>
          <p>{day}</p>
        </article>
        <article className={styles.adicional}>
          <p>{clima ? `Humedad: ${clima.main.humidity} %` : <Loader />}</p>
          <p>{clima ? `Viento: ${clima.wind.speed * 10} km/h` : null}</p>
          <p className={styles.img}>
            {clima ? (
              <img src={`${url}${clima.weather[0].icon}${arch}`} alt="icono" />
            ) : null}
          </p>
          <p className={styles.img}>
            {clima ? `Cielo: ${clima.weather[0].description}` : null}
          </p>
        </article>
      </div>
      <div className={styles.temperatura}>
        {clima ? <h1>{clima.main.temp.toFixed(1) + "°C"}</h1> : <Loader />}
        <p>{clima ? `${clima.name},${clima.sys.country}` : null}</p>
      </div>
    </div>
  );
};

export default ClimaHoy;
