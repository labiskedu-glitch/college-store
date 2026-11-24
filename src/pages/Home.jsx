import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h2>Welcome to College Store</h2>
      <p>Browse textbooks, stationery and college uniforms.</p>
      <Link className="button" to="/books">Explore Books</Link>
    </section>
  );
}
