export interface BookingModel {
    id: number ;
    equipment_id: number ;
    start_date: string | null;
    end_date: string | null;
    
}

export default BookingModel;