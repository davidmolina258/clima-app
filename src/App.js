import ClimaHoy from "./componentes/ClimaHoy";
import "./App.css";
import Formulario from "./componentes/Formulario";
import ClimaNext from "./componentes/ClimaNext";
import { useEffect, useState } from "react";

const apiKey = "5ff77aabd578e751dba4629a09f50d44";

function App() {
  const [ciudad, setCiudad] = useState("buenos aires");
  const [pais, setPais] = useState("argentina");
  const [climaHoy, setClimaHoy] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}&units=metric`
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
        console.log(data);
        return setClimaHoy(data);
      })
      .catch((error) => error);
  }, [ciudad, pais]);

  return (
    <div className="app">
      <ClimaHoy clima={climaHoy} />
      <Formulario setCiudad={setCiudad} setPais={setPais} />
      <ClimaNext ciudad={ciudad} pais={pais} />
    </div>
  );
}

export default App;
