import axios from "axios";
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
  APPLY_FILTERS,
  APPLY_ORDERING,
  ORDER_COUNTRIES,
  FILTER_COUNTRIES,
  CLEAN_ACTIVITY,
} from "./action-types";

export const getCountries = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/countries");
    dispatch({ type: GET_COUNTRIES, payload: data });
  };
};

// Acción para limpiar los datos de un país
export function cleanCountry() {
  return function (dispatch) {
    dispatch({
      type: CLEAN_COUNTRY, // Tipo de acción para limpiar el país
      payload: "",
    });
  };
}

export const getDetail = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/countries/id/${id}`);
    dispatch({ type: GET_DETAIL, payload: data });
  };
};

// Acción para ordenar países
export function orderCountries(orderTarget, criteria) {
  return async (dispatch) => {
    if (Object.values(criteria).every(value => value === undefined)) {
      return;
    } // con esto nos aseguramos que si todos los ordenamientos son undefined, no se ordene

    countriesOrder(orderTarget, criteria).then((orderTargetOrdered) => {
      return dispatch({
        type: ORDER_COUNTRIES,
        payload: orderTargetOrdered,
      });
    });
  };
}

export const getName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries/name?name=${name}`
      );

      dispatch({ type: GET_BY_NAME, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
// Acción para filtrar países por continente o actividad turística
export function filterCountries(orderTarget, criteria) {
  return async (dispatch) => {
    if (Object.values(criteria).every(value => value === undefined)) {
      return;
    } // con esto nos aseguramos que si todos los filtros son undefined, no se filtre

    filterContinentActivity(orderTarget, criteria).then((orderTargetFiltered) => {
      return dispatch({
        type: FILTER_COUNTRIES,
        payload: orderTargetFiltered,
      });
    });
  };
}

//!----------------------------ACTIVITIES----------------------------------------------------------//

export const createActivity = (activityData) => {
  return async (dispatch) => {
    activityData.difficulty = Number(activityData.difficulty);
    activityData.duration = Number(activityData.duration);
    axios
      .post("http://localhost:3001/countries/activities", activityData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        dispatch({ type: CREATE_ACTIVITY, payload: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/countries/activities");
      dispatch({ type: GET_ACTIVITIES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

// Acción para limpiar los datos de un país
export function cleanActivity() {
  return function (dispatch) {
    dispatch({
      type: CLEAN_ACTIVITY, // Tipo de acción para limpiar la actividad
      payload: "",
    });
  };
}


export const orderAlphabetically = (order) => {
  return {
    type: ORDER_ALPHABETICALLY,
    payload: order,
  };
};

export const orderPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const filterContinent = (contient) => {
  return {
    type: FILTER_CONTINENT,
    payload: contient,
  };
};

export const orderDuration = (order) => {
  return {
    type: ORDER_DURATION,
    payload: order,
  }
}
export function applyFilters(filters) {
  return function (dispatch) {
    dispatch({
      type: APPLY_FILTERS,
      payload: filters,
    });
  };
}

export function applyOrdering(order) {
  return function (dispatch) {
    dispatch({
      type: APPLY_ORDERING,
      payload: order,
    });
  };
}