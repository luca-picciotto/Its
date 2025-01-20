const equipmentApi = async () => {
    const response = await fetch('https://d3660g9kardf5b.cloudfront.net/api/equipment');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

export default equipmentApi;