export const equipmentApiGet = async () => {
    const response = await fetch('https://d3660g9kardf5b.cloudfront.net/api/equipment');
    if (!response.ok) {
        throw new Error('Errore nella richiesta dei dati: Equipments');
    }
    const data = await response.json();
    return data;
}

export default equipmentApiGet;