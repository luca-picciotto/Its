import BookingModel from "../../types/booking.model";
import '../equipment/equipment.css';
const Book = ({ bookingSelected }: { bookingSelected: BookingModel }) => {
    if(!bookingSelected) return null;

    const { equipment_id, start_date, end_date } = bookingSelected;

    return (
        <li className="card">
            <p>Equipment ID: {equipment_id}</p>
            <p>Start Date: {start_date}</p>
            <p>End Date: {end_date}</p>
        </li>
    );
};

export default Book;