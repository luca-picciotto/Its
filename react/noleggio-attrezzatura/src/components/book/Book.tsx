import BookingModel from "../../types/booking.model";

const Book = ({ bookingSelected }: { bookingSelected: BookingModel }) => {
    if(!bookingSelected) return null;

    const { equipment_id, start_date, end_date } = bookingSelected;

    return (
        <li >
            <div>
                <h2>Book</h2>
                <p>Equipment ID: {equipment_id}</p>
                <p>Start Date: {start_date}</p>
                <p>End Date: {end_date}</p>
            </div>
        </li>
    );
};

export default Book;