import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";
import Nav from "../Nav/Nav";

function DetailPage() {
  const { id } = useParams();
  const [countries, setCountries] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/countries/id/${id}`
        );
        const data = response.data;
        if (data.name) {
          setCountries(data);
          console.log(data);
        } else {
          window.alert("No hay países con ese ID");
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
        // Aquí puedes manejar el error de la manera que desees, por ejemplo, mostrando un mensaje de error al usuario
        window.alert("Ocurrió un error al obtener los datos del país");
      }
    };

    fetchData();

    return setCountries({});
  }, [id]);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.half}>
            <div className={styles.wave}>
              <img
                src={countries?.flags}
                alt={countries?.flags}
                height={350}
                width={300}
              />
            </div>
            <Link to={"/home"}>
              <button>Atras</button>
            </Link>
          </div>
          <div className={styles.half}>
            <h1>{countries?.name}</h1>
            <h2>ACRONIMO: {countries?.id}</h2>
            <h2>CONTINENTE: {countries?.continents}</h2>
            <h2>AREA: {countries?.area}</h2>
            <h2>CAPITALES:</h2>
            {countries?.capital &&
              countries.capital.map((capital, index) => (
                <h2 key={index}>{capital}</h2>
              ))}
            <h2>SUBREGION: {countries?.subregion}</h2>
            <h2>POBLACION: {countries?.population}</h2>
          </div>
          <div className={styles.activities}>
            <h2>ACTIVIDADES: </h2>
            {countries?.Activities && countries.Activities.length > 0 ? (
              countries.Activities.map((Activities, index) => (
                <div key={index}>
                  <h2>
                    <b>Actividad:</b> {Activities.name}
                  </h2>
                  <h2>
                    <b>Temporada:</b> {Activities.temporada}
                  </h2>
                  <br />
                </div>
              ))
            ) : (
              <Link to="/Form">
                <button className={styles.createActivityBtn}>
                  Create Activity
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
