import { useEffect, useState } from "react"
import { equipmentApiGet } from "../services/equipmentApi";
import EquipmentModel from "../types/equipment.model";

/**
 * Custom hook to fetch the list of available sports equipment.
 * 
 * This hook retrieves equipment data from the API and manages 
 * loading, success, and error states.
 *
 * @returns {Object} The hook returns an object with the following properties:
 * @returns {EquipmentModel[] | null} result - The array of available equipment, or null if no data is available.
 * @returns {boolean} loading - A boolean indicating if the API request is in progress.
 * @returns {string | null} error - An error message if the request fails, or null otherwise.
 */
export function useEquipmentApi() {
  const [result, setResult] = useState<EquipmentModel[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);



  useEffect(() => {
    setLoading(true);
    setError(null);
    equipmentApiGet()
      .then((data: EquipmentModel[]) => {
          setResult(data);
      })
      .catch((error: string) => {
          setError(error);
      })
      .finally(() => {
          setLoading(false);
      });
  }, []);
  

  return { result, loading, error };
};

/**
 * The function calculates the total price based on the duration and price per minute, returning
 * undefined if the price per minute is not provided.
 * @param {number} duration - The `duration` parameter represents the length of time for which a
 * service is used or a resource is consumed, typically measured in minutes.
 * @param {number | undefined} pricePerMinute - The `pricePerMinute` parameter in the `calculatePrice`
 * function represents the cost per minute of a service or product. This value is used to calculate the
 * total price based on the duration of the service or product usage. If `pricePerMinute` is
 * `undefined`, the function will return `
 * @returns The function `calculatePrice` returns the total price calculated by multiplying the
 * duration by the price per minute. If the `pricePerMinute` is `undefined`, the function returns
 * `undefined`.
 */
export function calculatePrice(duration: number, pricePerMinute: number | undefined): number | undefined {
  if (pricePerMinute === undefined) {
    return undefined;
  }
  return duration * pricePerMinute;
}

export default useEquipmentApi;
  