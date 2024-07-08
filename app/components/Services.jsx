import Citations from "~/components/Citations";

export default function Services({ services }) {
  const stableKeys = ['Morning Prayer', 'Evening Prayer'];
	// services.services[key].readings.full
  const allKeys = Object.keys(services);
	// services.services[dynamicKey].citations.1.full

  // Filter out stable keys to find the dynamic key
  const dynamicKey = allKeys.find(key => !stableKeys.includes(key));

  return (
    <div style={
			{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        margin: '0 auto',
        padding: '0 10px',
        // maxWidth: '1000px',
		}}>
      {stableKeys.map((key) => (
        <div key={key} style={{
					flex: '0 0 100%',
          maxWidth: '400px',
          marginBottom: '20px',
				}}>
          <h2>{key}</h2>
          <Citations readings={services[key].readings} />
        </div>
      ))}
      {dynamicKey && (
        <div style={{
					flex: '0 0 100%',
          maxWidth: '400px',
          marginBottom: '20px',
				}}>
          <h2>{dynamicKey}</h2>
          <Citations citations={services[dynamicKey].citations} />
        </div>
      )}
    </div>
  );
}