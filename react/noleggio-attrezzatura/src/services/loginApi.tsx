import UserRequest from "../types/userRequest.model";
import LoginResponse from "../types/loginResponse.model";

/**
 * This function sends a POST request to a login API endpoint with user credentials and returns the
 * token from the response.
 * @param {UserRequest} userRequest - The `userRequest` parameter in the `loginApiPost` function is of
 * type `UserRequest`. It contains the `username` and `password` properties needed for the login
 * request.
 * @returns The function `loginApiPost` is returning the token from the `LoginResponse` data after a
 * successful login request.
 */
export const loginApiPost = async (userRequest: UserRequest) => {
    const response = await fetch('https://d3660g9kardf5b.cloudfront.net/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                username: userRequest.username,
                password: userRequest.password,
            }
        ),
    });
    if (!response.ok) {
        throw new Error('Errore nella richiesta di login');
    }
    const data: LoginResponse = await response.json();
    return (data.token);
}

export default loginApiPost;