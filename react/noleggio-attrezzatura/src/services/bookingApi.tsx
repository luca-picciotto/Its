const bookingApi = async () => {
    const response = await fetch('https://d3660g9kardf5b.cloudfront.net/api/equipment-bookings');
    if (!response.ok) {
        throw new Error('Network response was not ok: books not found');
    }
    const data = await response.json();
    return data;
}

export default bookingApi;