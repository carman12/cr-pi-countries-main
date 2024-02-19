import SearchBar from "../SearchBar/SearchBar.jsx";
import CountriesOrderFilters from "../Filter/CountriesFilter.jsx";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <nav className={styles.navBar}>
      <div className={styles.filters}>
      {location.pathname === "/home" && <CountriesOrderFilters />}
        <CountriesOrderFilters />{" "}
        {/* Renderiza el componente CountriesOrderFilters para ordenar y filtrar países */}
      </div>
      <div className={styles.search}>
        <SearchBar />{" "}
        {/* Renderiza el componente SearchBar para buscar países */}
        {location.pathname !== "/home" && <CountriesOrderFilters />}
        <Link to="/home">
          <button className={styles.backBtn}>Go Back</button>
        </Link>
        <li>
        <Link to="/Form">
         <button className={styles.activitiesBtn}> Create Activities</button>
          </Link>
        </li>
        

      </div>
    </nav>
  );
}

export default Nav;