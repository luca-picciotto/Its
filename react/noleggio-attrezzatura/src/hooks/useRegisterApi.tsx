import { useEffect, useState } from "react"
import { registerApiPost } from "../services/registerApi";
import UserRequest from "../types/userRequest.model";

/**
 * Custom hook to handle user registration.
 * 
 * This hook provides a function to register a new user via the API,
 * managing loading, success, and error states.
 *
 * @returns {Object} The hook returns an object with the following properties:
 * @returns {string | null} result - A success message upon registration, or null if no registration has been made.
 * @returns {boolean} loading - A boolean indicating if the registration request is in progress.
 * @returns {string | null} error - An error message if the registration request fails, or null otherwise.
 * @returns {Function} register - A function that sends a registration request with user credentials.
 */
export function useRegisterApi() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
      if(result) {
        setTimeout(()=> {
          setResult(null);
        }, 2000)
      }
      if(error) {
        setTimeout(()=> {
          setError(null);
        }, 2000)
      }
    }, [result, error]);
    
/**
 * The `register` function takes a `UserRequest` object, sends a POST request to the register API, sets
 * the result or error accordingly, and manages loading state.
 * @param {UserRequest} userRequest - The `userRequest` parameter in the `register` function is of type
 * `UserRequest`. It is used to pass the user data that needs to be registered.
 * @returns {Promise<void>} - A promise that resolves when the login process is complete.
 */

   const register = (userRequest: UserRequest) => {
    setLoading(true);
    setError(null);
    registerApiPost(userRequest)
    .then((data) => {
        setResult(data);
        console.log(data);
        
    })
    .catch((error: string) => {
        setError(error);
    })
    .finally(() => {
        setLoading(false);
    });
    
  };

  
  
  return { result, loading, error, register };
};

export default useRegisterApi;
