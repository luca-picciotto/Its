import { useEffect, useState } from "react"
import { bookingApiPost } from "../services/bookingApi";

/**
 * The useBookEquipmentApi is a custom hook to handle the booking of sports equipment.
 * 
 * This hook provides state management for booking operations, including loading, success, and error states.
 * It also ensures that success and error messages are automatically cleared after a short duration.
 *
 * @returns {Object} The hook returns an object with the following properties:
 * @returns {string | null} result - The success message after booking, or null if no booking has been made.
 * @returns {boolean} loading - A boolean indicating if the booking request is in progress.
 * @returns {string | null} error - An error message if the booking fails, or null otherwise.
 * @returns {Function} bookEquipment - A function to initiate a booking request.
 */
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
  

  /**
 * Books equipment for a specified duration.
 *
 * @param {string} id - The unique identifier for the equipment.
 * @param {number} durationRequest - The duration for which the equipment is requested, in hours.
 * @param {string} token - Authorization token for the API request.
 * @returns {Promise<void>} A promise that resolves when the booking is completed.
 *
 * @throws {string} An error message if the booking fails.
 */
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
