import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, flags, fifa, name, continents, activity }) => {
  return (
    <div className={style.container}>
       <Link to={`/countries/id/${id}`}> 
        <img src={flags} alt={name} className={style.flags} />
        <div className={style.text}>
          <h2>{name.common}</h2>
          <h2>{fifa}</h2>
          <h3>{continents}</h3>
          <h3>{activity}</h3>
        </div>
      </Link> 
    </div>
  );
};

export default Card;