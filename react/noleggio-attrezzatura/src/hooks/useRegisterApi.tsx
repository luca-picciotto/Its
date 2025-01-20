import { useState } from "react"
import { registerApiPost } from "../services/registerApi";
import UserRequest from "../types/userRequest.model";


export function useRegisterApi() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  
   const register = (userRequest: UserRequest) => {
    registerApiPost(userRequest)
    .then((data) => {
        setResult(data);
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
