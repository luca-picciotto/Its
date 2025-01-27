import { useEffect, useState } from "react"
import { loginApiPost } from "../services/loginApi";
import UserRequest from "../types/userRequest.model";
import LoginResponse from "../types/loginResponse.model";
import { useNavigate } from "react-router-dom";


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
