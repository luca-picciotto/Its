import BookingModel from "../../types/booking.model";
import EquipmentModel from "../../types/equipment.model";
import '../equipment/equipment.css';

interface BookProps {

    bookingSelected: BookingModel;

    equipment?: EquipmentModel;

}
const Book = ({bookingSelected, equipment} : BookProps) => {
    if(!bookingSelected) return null;
    if(!equipment) return "No equipment found ";
    
    const { start_date, end_date } = bookingSelected;
    const { name } = equipment;
    
    
    
    return (

        <li className="card">
            <p>Equipment: {name}</p>
            <p>Start Date: {start_date}</p>
            <p>End Date: {end_date}</p>
        </li>
    );
};

export default Book;