import './bookList.css';
import useBookingApi from '../../hooks/useBookingApi';
import Book from '../book/Book';
import EquipmentModel from '../../types/equipment.model';

const BookList = () => {
    const { result, resultEquipment, errorEquipment, loading, error } = useBookingApi();
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if(errorEquipment) return <div>Error: {errorEquipment}</div>;
    const findEq = (id: number) => { 
        return resultEquipment.find((equipment: EquipmentModel) => Number(equipment.id) === id);
    }
    
    
    if (result && result.length > 0) {  
        return (
            <div>
                <ul className="booking-list">
                    {result.map((booking) => {
                       const equipmentSelect = findEq(booking.equipment_id);
                       
                       return(
                        <>
                            <Book key={booking.id} bookingSelected={booking} equipment={ equipmentSelect} />
                        </>
                       )
                        })
                    } 
                </ul>
                
            </div>
        );
    }

    return <div>No bookings found.</div>;
};

export default BookList;