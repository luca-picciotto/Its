import UserRequest from "../types/userRequest.model";
import LoginResponse from "../types/loginResponse.model";

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
    return data.token;
}

export default loginApiPost;