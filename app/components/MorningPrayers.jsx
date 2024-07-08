export default function MorningPrayers({ morningPrayers }) {
  const readings = morningPrayers.readings;

  if (!readings) {
    return <div>No morningPrayers available.</div>;
  }

  return (
    <div>
			<h2>Readings</h2>
      {Object.keys(readings).map(key => (
        <div key={key}>
          {readings[key].map((morningPrayer, index) => (
            <ol key={index}>
              <li>{key}. {morningPrayer.full}</li>
            </ol>
          ))}
        </div>
      ))}
    </div>
  );
}