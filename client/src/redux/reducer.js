import {
  GET_COUNTRIES,
  GET_DETAIL,
  GET_BY_NAME,
  CREATE_ACTIVITY,
  GET_ACTIVITIES,
  ORDER_ALPHABETICALLY,
  ORDER_POPULATION,
  FILTER_CONTINENT,
  ORDER_DURATION,
  CLEAN_COUNTRY,
  CLEAN_ACTIVITY,
} from "./action-types";

const initialState = {
  allCountries: [],
  countries: [],
  countryDetail: null, // Cambié esto a null en lugar de un array vacío para indicar que no hay detalles de país seleccionado por defecto
  activities: [],
  allActivities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_COUNTRY:
      return {
        ...state,
        countryDetail: null, // Limpia los detalles del país estableciéndolo como null
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_DETAIL:
      console.log(action.payload);
      return {
        ...state,
        countryDetail: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
        allActivities: [...state.allActivities, action.payload],
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        allActivities: action.payload,
      };
    case ORDER_ALPHABETICALLY:
      const orderedCountriesByAlphabet = [...state.countries];
      orderedCountriesByAlphabet.sort((a, b) => {
        if (action.payload === "D") {
          return b.name.localeCompare(a.name); // Orden descendente
        } else {
          return a.name.localeCompare(b.name); // Orden ascendente
        }
      });
      return {
        ...state,
        countries: orderedCountriesByAlphabet,
        allCountries: orderedCountriesByAlphabet, // Aplicar ordenamiento a todos los países
      };
    case ORDER_POPULATION:
      const orderedCountriesByPopulation = [...state.countries];
      orderedCountriesByPopulation.sort((a, b) => {
        if (action.payload === "D") {
          return b.population - a.population; // Orden descendente
        } else {
          return a.population - b.population; // Orden ascendente
        }
      });
      return {
        ...state,
        countries: orderedCountriesByPopulation,
        allCountries: orderedCountriesByPopulation, // Aplicar ordenamiento a todos los países
      };
    case FILTER_CONTINENT:
      const continentCountries = state.allCountries.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        countries: continentCountries,
      };
    case ORDER_DURATION:
      const orderedActivitiesByDuration = [...state.activities];
      orderedActivitiesByDuration.sort((a, b) => {
        if (action.payload === "D") {
          return b.duration - a.duration; // Orden descendente
        } else {
          return a.duration - b.duration; // Orden ascendente
        }
      });
      return {
        ...state,
        activities: orderedActivitiesByDuration,
        allActivities: orderedActivitiesByDuration, // Aplicar ordenamiento a todas las actividades
      };
    case CLEAN_ACTIVITY:
      return {
        ...state,
        activities: [], // Limpia las actividades estableciéndolas como un array vacío
      };
    default:
      return state;
  }
};

export default reducer;
