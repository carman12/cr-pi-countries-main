import React, { useState, useEffect } from "react";
import validation from "../../utils/validation";
import axios from "axios";
import "./Form.module.css";
import paises from "./paises";
import Nav from "../Nav/Nav";

function Form() {
  const [activity, setActivity] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    CountryID: "",
  });

  const [error, setError] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    message: "",
  });

  const [selectedCountries, setSelectedCountries] = useState(""); // Nuevo estado para almacenar los países seleccionados como una cadena

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setActivity({ ...activity, [property]: value });
  };

  const handleCountrySelection = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountries(selectedCountries + " " + selectedCountry); // Concatenar el país seleccionado al estado selectedCountries
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(activity);
    if (!validation(activity, error, setError)) {
      return;
    }

    axios
      .post("http://localhost:3001/activities/create", {
        ...activity,
        CountryID: selectedCountries.trim().split(" "), // Dividir la cadena de países seleccionados en un array y asignarla a CountryID
      })
      .then((res) => {
        if (res.status === 200) {
          setError({
            ...error,
            name: "",
            dificultad: "",
            duracion: "",
            temporada: "",
            message: "¡Bien hecho! ¡Creado!",
          });
          setActivity({
            name: "",
            dificultad: "",
            duracion: "",
            temporada: "",
            CountryID: "",
          });
          setSelectedCountries(""); // Limpiar los países seleccionados después de enviar el formulario
        } else {
          console.error("Error creating activity");
          alert("Error al crear la actividad");
        }
      })
      .catch((error) => {
        console.error("Error al enviar datos a la API:", error);
        alert("Error al enviar datos a la API");
      });
  };

  const [paisesOptions, setPaisesOptions] = useState([]);

  useEffect(() => {
    const fetchPaises = async () => {
      const options = await paises();
      setPaisesOptions(options);
    };

    fetchPaises();
  }, []);

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <h2 className="tracking-in-expand">Create your activity</h2>
        <div className="item">
          <label htmlFor="name">Name Activity </label>
          <input
            id="name"
            type="text"
            name="name"
            value={activity.name}
            onChange={handleChange}
          />
          <div>
            <span className="required">{error.name}</span>
          </div>
        </div>
        <div className="item">
          <label htmlFor="dificultad">Dificultad </label>
          <input
            id="dificultad"
            type="text"
            name="dificultad"
            value={activity.dificultad}
            onChange={handleChange}
          />
          <div>
            <span className="required">{error.dificultad}</span>
          </div>
        </div>
        <div className="item">
          <label htmlFor="duracion">Duración (Horas) </label>
          <input
            id="duracion"
            type="text"
            name="duracion"
            value={activity.duracion}
            onChange={handleChange}
          />
          <div>
            <span className="required">{error.duracion}</span>
          </div>
        </div>
        <div className="item">
          <label htmlFor="temporada">Temporada </label>
          <input
            id="temporada"
            type="text"
            name="temporada"
            value={activity.temporada}
            onChange={handleChange}
          />
          <div>
            <span className="required">{error.temporada}</span>
          </div>
        </div>
        <div className="teams">
          <p>Select teams with control + click in the team and submit</p>
          <label htmlFor="CountryID">Paises</label>
          <select
            id="CountryID"
            onChange={handleCountrySelection}
            value={selectedCountries.trim().split(" ")} // Convertir la cadena de países seleccionados en un array
            multiple
            style={{ height: "200px" }}
          >
            {paisesOptions.map((paises) => (
              <option key={paises.id} value={paises.id}>
                {paises.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={selectedCountries}
            readOnly
            style={{ marginLeft: "10px" }} // Estilo para separar el input de la lista de selección
          />
        </div>

        <div>
          <span className="span-general"> {error.message}</span>
        </div>
        <div className="but">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
