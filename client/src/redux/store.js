import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"; // esel traductor de js a jacson
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea sirve para conectar nuestra app con la extension REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea sirve para que podamos hacer péticioens  una api/servidor
);

export default store;
