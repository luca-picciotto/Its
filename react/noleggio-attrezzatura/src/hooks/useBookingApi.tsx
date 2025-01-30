import { useEffect, useState } from "react";
import {bookingApiGet} from "../services/bookingApi";
import BookingModel from "../types/booking.model";
import EquipmentModel from "../types/equipment.model";
import { equipmentApiGet } from "../services/equipmentApi";
/**
 * Custom hook to fetch the list of active equipment bookings.
 * 
 * This hook handles the fetching of booking data from the API, 
 * managing loading, success, and error states.
 *
 * @returns {Object} The hook returns an object with the following properties:
 * @returns {BookingModel[] | null} result - The array of booking records, or null if no data is available.
 * @returns {boolean} loading - A boolean indicating if the API request is in progress.
 * @returns {string | null} error - An error message if the request fails, or null otherwise.
 */
export function useBookingApi() {
    const [result, setResult] = useState<BookingModel[] | null>(null);
    const [resultEquipment, setResultEquipment] = useState<EquipmentModel[] >([]);
    const [errorEquipment, setErrorEquipment] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        setError(null);
        bookingApiGet()
            .then((data: BookingModel[]) => {
                setResult(data);
            })
            .catch((error: string) => {
                setError(error);
            })
        equipmentApiGet()
            .then((data: EquipmentModel[]) => {
                
                setResultEquipment(data);
            })
            .catch((error: string) => {
                setErrorEquipment(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    return { result, resultEquipment, errorEquipment, loading, error };
}

export default useBookingApi;