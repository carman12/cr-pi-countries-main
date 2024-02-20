// SearchBar.jsx
import React, { useState } from "react";
import { connect } from "react-redux";
import { getName } from "../../redux/actions";

const SearchBar = ({ getName }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    getName(query);
    alert(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getName: (query) => dispatch(getName(query)),

});

export default connect(null, mapDispatchToProps)(SearchBar);
