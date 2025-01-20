import UserRequest from "../types/userRequest.model";

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