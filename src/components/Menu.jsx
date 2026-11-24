import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/stationery">Stationery</NavLink>
      <NavLink to="/uniforms">Uniforms</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
