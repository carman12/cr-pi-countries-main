import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

const HomePage = () => {
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedCountry, setSearchedCountry] = useState(null); // Estado para almacenar el país buscado

  // Función para manejar la búsqueda exitosa
  const handleSearchSuccess = (country) => {
    setSearchedCountry(country); // Actualiza el país buscado en el estado
  };

  let nextPage = () => {
    const totalPages = Math.ceil(countries.length / 10); // Calcula el total de páginas
    if (currentPage < totalPages) {
      // Verifica si hay más páginas disponibles
      setCurrentPage(currentPage + 1);
    }
  };

  let prevPage = () => {
    if (currentPage > 1) {
      if (currentPage <= 9) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    if (countries.length === 0) {
      setCurrentPage(1); // Si no hay países, establece la página actual en 1
    } else {
      const totalPages = Math.ceil(countries.length / 10); // Calcula el total de páginas
      setCurrentPage(totalPages); // Establece la página actual en la última página
    }
  };

  useEffect(() => {
    firstPage();
  }, [countries]);


  useEffect(() => {
  }, [searchedCountry]); // Aquí se agrega el useEffect para monitorear cambios en searchedCountry


   const filteredCountries= countries.slice(
    10 * (currentPage - 1),
    currentPage * 10
  );

  return (
    <div className={styles.content}>
      <div className={styles.paginationContainer}>
        <button onClick={firstPage}>Primera página</button>
        <button onClick={prevPage}>Anterior</button>
        <button onClick={nextPage}>Siguiente</button>
        <button onClick={lastPage}>Ultima página</button>
      </div>
      <SearchBar onSearchSuccess={handleSearchSuccess} />
      {searchedCountry ? ( // Muestra la tarjeta del país buscado si existe uno
        <div className={styles.cardContainer}>
          <Card country={searchedCountry} />
        </div>
      ) : (
        <Cards filteredCountries={filteredCountries} />
      )}
    </div>
  );
};

export default HomePage;
