export const bookingApiGet = async () => {
    const response = await fetch('https://d3660g9kardf5b.cloudfront.net/api/equipment-bookings');
    if (!response.ok) {
        throw new Error('Network response was not ok: books not found');
    }
    const data = await response.json();
    return data;
}

export const bookingApiPost = async (id: string, durationRequest:number) => {
    const response = await fetch(`https://d3660g9kardf5b.cloudfront.net/api/equipment/${id}/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "duration": durationRequest,
        }),
    });
    if (!response.ok) {
        throw new Error('Errore nella richiesta di inserimento dati: Equipments');
    }
    const data = await response.text();
    return data;
}

