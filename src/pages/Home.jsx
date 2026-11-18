import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <h1 className="page-title" style={{ fontSize: '3.5rem' }}>Nur Emillya Asya</h1>
      <h2 className="page-subtitle" style={{ fontSize: '1.5rem', color: '#8b4513' }}>
        Data Analytics Undergraduate
      </h2>
      <p style={{ maxWidth: '700px', margin: '1rem auto 2rem', color: '#a0a0a0', lineHeight: '1.6' }}>
        Turning complex data into clear business insights. Equipped with a technical toolkit spanning Python, R, MongoDB, SAS Viya, and R Shiny.
      </p>
      <Link to="/projects" style={{
        display: 'inline-block',
        padding: '12px 30px',
        backgroundColor: '#8b4513',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'background 0.3s'
      }}>
        View My Projects
      </Link>
    </div>
  );
}