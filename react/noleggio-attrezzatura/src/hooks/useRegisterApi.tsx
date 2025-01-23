import { useState } from "react"
import { registerApiPost } from "../services/registerApi";
import UserRequest from "../types/userRequest.model";


export function useRegisterApi() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  
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
