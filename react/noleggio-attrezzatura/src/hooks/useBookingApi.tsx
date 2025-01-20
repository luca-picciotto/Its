import { useEffect, useState } from "react";
import {bookingApiGet} from "../services/bookingApi";
import BookingModel from "../types/booking.model";

export function useBookingApi() {
    const [result, setResult] = useState<BookingModel[] | null>(null);
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
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { result, loading, error };
}

export default useBookingApi;