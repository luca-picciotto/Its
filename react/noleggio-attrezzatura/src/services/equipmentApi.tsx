/**
 * The function `equipmentApiGet` makes an asynchronous GET request to retrieve equipment data from a
 * specified API endpoint.
 * @returns The `equipmentApiGet` function is returning the data fetched from the
 * 'https://d3660g9kardf5b.cloudfront.net/api/equipment' endpoint after making a GET request. The data
 * is expected to be in JSON format.
 */
export const equipmentApiGet = async () => {
    const response = await fetch('https://d3660g9kardf5b.cloudfront.net/api/equipment', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Errore nella richiesta dei dati: Equipments');
    }
    const data = await response.json();
    return data;
}

export default equipmentApiGet;