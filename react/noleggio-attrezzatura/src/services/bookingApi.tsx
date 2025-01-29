/**
 * The `bookingApiGet` function fetches equipment booking data from a specified API endpoint and
 * returns the data.
 * @returns The `bookingApiGet` function is returning the data fetched from the
 * 'https://d3660g9kardf5b.cloudfront.net/api/equipment-bookings' endpoint after checking if the
 * response is successful. If the response is not ok, it throws an error with the message 'Network
 * response was not ok: books not found'. If the response is successful, it parses the response
 */
export const bookingApiGet = async () => {
    const response = await fetch('https://d3660g9kardf5b.cloudfront.net/api/equipment-bookings');
    if (!response.ok) {
        throw new Error('Network response was not ok: books not found');
    }
    const data = await response.json();
    return data;
}

/**
 * The `bookingApiPost` function sends a POST request to book equipment with specified duration using
 * the provided ID and token.
 * @param {string} id - The `id` parameter in the `bookingApiPost` function represents the unique
 * identifier of the equipment that you want to book. It is used to specify which equipment you are
 * making a booking for.
 * @param {number} durationRequest - The `durationRequest` parameter in the `bookingApiPost` function
 * represents the duration for which a particular equipment is being booked. It is a number that
 * specifies the duration in some unit of time, such as hours or days, for which the equipment will be
 * reserved. This value is sent as part
 * @param {string} token - The `token` parameter in the `bookingApiPost` function is a string that
 * represents the authorization token needed to authenticate the API request. This token is typically
 * obtained after a user logs in or authenticates with the system and is used to verify the user's
 * identity and permissions when making requests to the
 * @returns The `bookingApiPost` function is returning the data received from the API endpoint after
 * making a POST request to book equipment with the specified ID and duration. The data returned is the
 * response text from the API call.
 */
export const bookingApiPost = async (id: string, durationRequest:number, token: string  ) => {
    const response = await fetch(`https://d3660g9kardf5b.cloudfront.net/api/equipment/${id}/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
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

