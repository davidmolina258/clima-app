import styles from "./climaNext.module.css";

const inicialSemana = [
  "",
  "Jueves",
  "viernes",
  "sabado",
  "domingo",
  "Lunes",
  "martes",
  "miercoles",
  "Jueves",
  "viernes",
  "sabado",
  "domingo",
  "Lunes",
  "martes",
  "miercoles",
  "Jueves",
  "viernes",
  "sabado",
  "domingo",
  "Lunes",
  "martes",
  "miercoles",
  "Jueves",
  "viernes",
  "sabado",
  "domingo",
  "Lunes",
  "martes",
  "miercoles",
  "Jueves",
  "viernes",
  "sabado",
  "domingo",
  "Lunes",
  "martes",
  "miercoles",
  "Jueves",
  "viernes",
  "sabado",
  "domingo",
  "Lunes",
  "martes",
  "miercoles",
  "Jueves",
  "viernes",
  "sabado",
];
const fechaHoy = new Date();

const DiaNext = ({ datoDia, index }) => {
  const main = datoDia.main;
  const weather = datoDia.weather;

  let url = "https://api.openweathermap.org/img/w/";
  let arch = ".png";

  const diaPronostico = (i) => {
    let dia = fechaHoy.getDate() + i;
    let diaSemana = inicialSemana[dia];
    return `${diaSemana}, ${dia} `;
  };

  return index !== 0 ? (
    <li className={styles.dia}>
      <p className={styles.dato}>{diaPronostico(index)}</p>
      <h2>{`${main.temp.toFixed(1)} °C`}</h2>
      <p className={styles.dato}>
        <img src={`${url}${weather[0].icon}${arch}`} alt="icono" />
      </p>
      <p className={styles.dato}>{weather[0].description}</p>
    </li>
  ) : null;
};

export default DiaNext;
