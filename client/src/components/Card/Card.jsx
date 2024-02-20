import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, flags, fifa, name, continents, activity }) => {
  return (
    <div className={style.container}>
       <Link to={`/countries/id/${id}`}> 
        <img src={flags} alt={name} className={style.flags} width={320} height={160} />
        <div className={style.text}>
          <h2>{name}</h2>
          <h3>{continents}</h3>
        </div>
      </Link> 
    </div>
  );
};

export default Card;