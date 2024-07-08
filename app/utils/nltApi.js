const NLT_API_BASE_URL = 'https://api.nlt.to/api/passages';
const API_KEY = 'da7d3e22-a5c2-418e-94cb-fec35ab3fc0b'; // Replace with your actual API key

export async function fetchScripture(reference) {
	const url = `${NLT_API_BASE_URL}?ref=${encodeURIComponent(reference)}&key=${API_KEY}`;
	console.log('Fetching scripture:', url);
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Failed to fetch scripture: ${response.statusText}`);
		}
		const html = await response.text();
		return html;
	} catch (error) {
		console.error('Error fetching scripture:', error);
		throw error;
	}
}