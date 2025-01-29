import { useEffect, useState } from "react"
import { loginApiPost } from "../services/loginApi";
import UserRequest from "../types/userRequest.model";
import LoginResponse from "../types/loginResponse.model";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook to handle user authentication.
 * 
 * This hook provides a function to authenticate users via a login API,
 * managing loading, success, and error states. It also stores the authentication 
 * token and username in local storage upon successful login.
 *
 * @returns {Object} The hook returns an object with the following properties:
 * @returns {LoginResponse | string | undefined} result - The login response data or an empty string when reset.
 * @returns {boolean} loading - A boolean indicating if the login request is in progress.
 * @returns {string | null} error - An error message if the login request fails, or null otherwise.
 * @returns {Function} login - A function that sends a login request with user credentials.
 */
export function useLoginApi() {
  const [result, setResult] = useState<LoginResponse | string>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
      if(result) {
        setTimeout(()=> {
          setResult("");
        }, 2000)
      }
      if(error) {
        setTimeout(()=> {
          setError(null);
        }, 2000)
      }
    }, [result, error]);
  
 /**
 * The `login` function takes a `UserRequest` object, sends a POST request to the login API,
 * sets the result or error accordingly, and manages the loading state.
 * 
 * @param {UserRequest} userRequest - The `userRequest` parameter in the `login` function is of type
 * `UserRequest`. It is used to pass the user data that needs to log in.
 * 
 * @returns {Promise<void>} - A promise that resolves when the login process is complete.
 */
   const login = (userRequest: UserRequest) => {
    setLoading(true);
    setError(null);
    loginApiPost(userRequest)
    .then((data) => {
        setResult(data);
        localStorage.setItem('authToken', data);
        localStorage.setItem('userName', userRequest.username);
        console.log(data);
        navigate('/');
    })
    .catch((error: string) => {
        setError(error);
    })
    .finally(() => {
        setLoading(false);
    });
    
  };

  
  
  return { result, loading, error, login };
};

export default useLoginApi;
