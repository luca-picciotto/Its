import { useEffect, useState } from "react"
import { bookingApiPost } from "../services/bookingApi";


export function useBookEquipmentApi() {
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
  
   const bookEquipment = (id: string , durationRequest: number, token: string ) => {
    bookingApiPost(id, durationRequest, token)
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

  
  
  return { result, loading, error, bookEquipment };
};

export default useBookEquipmentApi;
