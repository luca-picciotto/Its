import UserRequest from "../types/userRequest.model";

/**
 * The function `registerApiPost` sends a POST request to a registration API endpoint with user
 * credentials and returns the response data.
 * @param {UserRequest} userRequest - The `userRequest` parameter in the `registerApiPost` function is
 * of type `UserRequest`. It contains the username and password that are needed for registering a user.
 * @returns The `registerApiPost` function is returning the data received from the API response after a
 * successful registration request.
 */
export const registerApiPost = async (userRequest: UserRequest) => {
    const response = await fetch('https://d3660g9kardf5b.cloudfront.net/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userRequest.username,
            password: userRequest.password,
        }),
    });
    if (!response.ok) {
        throw new Error('Errore nella richiesta di registrazione');
    }
    const data = await response.text();
    return data;
}

export default registerApiPost;