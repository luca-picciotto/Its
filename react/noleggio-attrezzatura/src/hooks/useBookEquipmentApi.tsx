import { useState } from "react"
import { bookingApiPost } from "../services/bookingApi";


export function useBookEquipmentApi() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  
   const bookEquipment = (id: string, durationRequest: number) => {
    bookingApiPost(id, durationRequest)
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
