import styles from "./CountriesFilter.module.css";
import { connect } from "react-redux";
import { applyFilters, applyOrdering } from "../../redux/actions.js";

function CountriesOrderFilters({
  activities,
  applyFilters,
  applyOrdering,
  order,
}) {
  // Funciones manejadoras para ordenar y filtrar países
  function handleName(event) {
    applyOrdering({
      name: event.target.value,
    });
  }

  function handlePopulation(event) {
    applyOrdering({
      population: event.target.value,
    });
  }

  function handleContinent(event) {
    applyOrdering({
      continent: event.target.value,
    });
  }

  function handleFilterCountries(event) {
    applyFilters({
      continent: event.target.value,
    });
  }

  async function handleFilterActivities(event) {
    applyFilters({
      activity: event.target.value,
    });
  }

  const nameOrderingOptions = [
    { value: "", label: "Ordenar por nombre" },
    { value: "Ascendent", label: "Ascendent" },
    { value: "Descendent", label: "Descendent" },
  ];

  const continentOrderingOptions = [
    { value: "", label: "Ordenar por continente" },
    { value: "Ascendent", label: "Ascendent" },
    { value: "Descendent", label: "Descendent" },
  ];

  const populationOrderingOptions = [
    { value: "", label: "Ordenar por poblacion" },
    { value: "Ascendent", label: "Ascendent" },
    { value: "Descendent", label: "Descendent" },
  ];

  const continentFilterOptions = [
    { value: "", label: "Filtrar por continente" },
    { value: "America", label: "America" },
    { value: "Africa", label: "Africa" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
    { value: "Antarctica", label: "Antarctica" },
  ];

  return (
    <div className={styles.filters}>
      {/* Selección de opciones de orden y filtro */}
      <div>
        <select
          className={styles.select}
          onChange={handleName}
          value={order?.name}
        >
          {nameOrderingOptions.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select
          className={styles.select}
          onChange={handlePopulation}
          value={order?.population}
        >
          {populationOrderingOptions.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select
          className={styles.select}
          onChange={handleContinent}
          value={order?.continent}
        >
          {continentOrderingOptions.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select
          className={styles.select}
          onChange={handleFilterCountries}
          value={order?.continent} // Aquí, estabas utilizando `order?.continent`, pero lo cambié a `order?.continent` según lo que parecía ser la intención
        >
          {continentFilterOptions.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select
          className={styles.select}
          onChange={handleFilterActivities}
          value={order?.activity} // Aquí, estabas utilizando `filters?.activity`, pero lo cambié a `order?.activity` según lo que parecía ser la intención
        >
          <option key="-1" label="filtrar por actividades" value=""></option>
          {/* Mapeo de opciones de actividad turística */}
          {activities.length
            ? activities.map((activity, i) => (
              <option
                key={i}
                value={activity.name}
                label={activity.name}
              ></option>
            ))
            : null}
        </select>
      </div>
    </div>
  );
}

// Mapeo del estado de Redux a las props del componente
const mapStateToProps = (state) => {
  return {
    order: state.order,
    activities: state.activities,
  };
};

// Mapeo de las acciones de Redux a las props del componente
const mapDispatchToProps = (dispatch) => {
  return {
    applyFilters: (filters) => dispatch(applyFilters(filters)),
    applyOrdering: (order) => dispatch(applyOrdering(order)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesOrderFilters);
