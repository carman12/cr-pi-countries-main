import SearchBar from "../SearchBar/SearchBar.jsx";
import CountriesOrderFilters from "../Filter/CountriesFilter.jsx";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

function Nav({ onSearch }) {
  const location = useLocation();
  
  // Verifica si la ubicación actual es la página de inicio
  const isHomePage = location.pathname === "/home";

  return (
    // Solo renderiza la barra de navegación si es la página de inicio
    <>
      {isHomePage && (
        <nav className={styles.navBar}>
          <div className={styles.filters}>
            <CountriesOrderFilters />
            {/* Renderiza el componente CountriesOrderFilters solo en la página de inicio */}
          </div>
          <div className={styles.search}>
            <SearchBar onSearch={onSearch}/>
            {/* Renderiza el componente SearchBar en todas las páginas */}
            {location.pathname !== "/home" || location.pathname !== "/Form" }
            {/* Renderiza el componente CountriesOrderFilters en todas las páginas excepto en la página de inicio */}
            {isHomePage && ( // Renderiza el botón solo en la página de inicio
              <li>
                <Link to="/Form">
                  <button className={styles.activitiesBtn}>Crear actividades</button>
                </Link>
              </li>
            )}
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
