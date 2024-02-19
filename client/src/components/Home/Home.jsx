import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

const HomePage = () => {
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);

  let nextPage = () => {
    const totalPages = Math.ceil(countries.length / 10); // Calcula el total de páginas
    if (currentPage < totalPages) { // Verifica si hay más páginas disponibles
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

  const filteredCountries = countries.slice(
    10 * (currentPage - 1),
    currentPage * 10
  );

  return (
    <div className={styles.content}>
      <div className={styles.paginationContainer}>
        <button onClick={firstPage}>First</button>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
        <button onClick={lastPage}>Last</button>
      </div>

      <Cards filteredCountries={filteredCountries} />
    </div>
  );
};

export default HomePage;
