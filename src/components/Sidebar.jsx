import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside>
      <h3>Categories</h3>
      <Link to="/books">Textbooks</Link>
      <Link to="/stationery">Notebooks and Pens</Link>
      <Link to="/uniforms">Uniforms and Bags</Link>
    </aside>
  );
}
