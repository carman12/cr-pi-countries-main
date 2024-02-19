import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({firstPage, prevPage, nextPage, lastPage, filteredCountries}) => {
  return (
    <div className={style.container}>
        {filteredCountries?.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            flags={country.flags}
            fifa={country.fifa}
            name={country.name}
            continents={country.continents}
            activity={country.Activities}
          />
        ))}
    </div>
  );
};

export default Cards;