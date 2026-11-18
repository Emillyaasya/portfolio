const certs = [
  'SAS Certified Specialist: Visual Business Analytics Using SAS Viya',
  'AWS Cendekiawan Malaysia AI Learning Path',
  'ASEAN Data Science Explorers 2026 - SAP Analytics Cloud Training',
];

export default function Certificates() {
  return (
    <div className="page-container">
      <h1 className="page-title">Certifications & Training</h1>
      {certs.map((c, i) => (
        <div className="card" key={i}>
          <p>{c}</p>
        </div>
      ))}
    </div>
  );
}