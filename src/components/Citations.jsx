export default function Citations({ readings, citations }) {
  if (!readings && !citations) {
    return <div>No readings or citations available.</div>;
  }

  return (
    <div>
      {readings && readings.map((reading, index) => (
        <div key={index}>
          <p><strong>{reading.full.name}:</strong> {reading.full.citation}</p>
        </div>
      ))}
      {citations && Object.keys(citations).map(key => (
        <div key={key}>
          {citations[key].map((citation, index) => (
            <div key={index}>
              <p>{key}. {citation.full}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}