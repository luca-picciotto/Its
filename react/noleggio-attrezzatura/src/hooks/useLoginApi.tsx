import { useState } from "react"
import { loginApiPost } from "../services/loginApi";
import UserRequest from "../types/userRequest.model";


export function useLoginApi() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  
   const login = (userRequest: UserRequest) => {
    loginApiPost(userRequest)
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

  
  
  return { result, loading, error, login };
};

export default useLoginApi;
