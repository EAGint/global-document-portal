export default function Home() {
  return (
    <main style={{ padding: '50px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a365d' }}>EAG International</h1>
        <p style={{ fontSize: '1.2rem', color: '#4a5568' }}>Global Document Portal</p>
        <div style={{ color: 'green', fontWeight: 'bold' }}>🟢 Systems Operational</div>
      </header>

      <section style={{ background: '#f7fafc', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Available Documents</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          {/* Add your 76 documents here like the examples below */}
          <li style={{ marginBottom: '15px' }}>
            <a href="/Sectors.html" style={{ color: '#2b6cb0', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '500' }}>
              📄 View Sector Information (Full Report)
            </a>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <a href="/Governments.html" style={{ color: '#2b6cb0', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '500' }}>
              📄 View Government Policy Documents
            </a>
          </li>
          {/* Repeat this <a> tag for your other files */}
        </ul>
      </section>

      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#718096', fontSize: '0.9rem' }}>
        © 2026 EAG International. All Rights Reserved.
      </footer>
    </main>
  );
}