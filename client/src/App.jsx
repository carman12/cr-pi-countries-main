import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing/Landing";
import HomePage from "./components/Home/Home";
import Detail from "./components/Detail/DetailPage";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import { getCountries, orderAlphabetically } from "./redux/actions";
import { useDispatch } from "react-redux";
import Nav from "./components/Nav/Nav";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCountries = async () => {
      await dispatch(getCountries());
      //await dispatch(getDetail());
      await dispatch(orderAlphabetically("A"));
    };

    fetchCountries();
  }, [dispatch]);
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/countries/id/:id" element={<Detail />} />
        /* <Route path="/form" element={<Form />} /> */
      </Routes>
    </div>
  );
}

export default App;