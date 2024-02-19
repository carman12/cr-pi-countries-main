import { NavLink } from "react-router-dom";

const Button = ({ link, text }) => {
  return (
    <NavLink to={link}>
      <button>{text}</button>
    </NavLink>
  );
};
export default Button;
