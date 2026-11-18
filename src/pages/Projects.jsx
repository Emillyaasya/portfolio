const projects = [
  { title: 'AI Flood Detection and Alert System', desc: 'IoT based flood monitoring system integrating sensor data and predictive AI models.' },
  { title: 'Road Safety Data Analytics Dashboard', desc: 'Analysed Pahang Road accident using R and Power BI to identify accident patterns.' },
  { title: 'TransactPro', desc: 'Python-based banking application using Linked Lists and Stacks.' },
  { title: 'Amazon Retail Analytics Platform', desc: 'MongoDB-based analytics platform with advanced aggregation pipelines.' },
  { title: 'Hidden Risks in FinTech (R-Shiny)', desc: 'Interactive R Shiny dashboard and ML framework to detect fraudulent transactions.' },
  { title: 'Telco Customer Churn (SAS Viya)', desc: 'Interactive SAS Viya dashboard to analyze customer churn patterns.' },
];

export default function Projects() {
  return (
    <div className="page-container">
      <h1 className="page-title">Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3 style={{ marginBottom: '0.5rem' }}>{p.title}</h3>
            <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}