export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'd4116aff37msh0fc866f0150ee50p1c29c6jsne90e73976bd6',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
    headers: headers,
	});
	
	const result = await response.json();

	return result;
}