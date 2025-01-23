import { useState } from "react"
import { loginApiPost } from "../services/loginApi";
import UserRequest from "../types/userRequest.model";
import LoginResponse from "../types/loginResponse.model";


export function useLoginApi() {
  const [result, setResult] = useState<LoginResponse | string>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  
   const login = (userRequest: UserRequest) => {
    setLoading(true);
    setError(null);
    loginApiPost(userRequest)
    .then((data) => {
        setResult(data);
        localStorage.setItem('authToken', data);
        console.log(data);
        
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
