import './bookList.css';
import useBookingApi from '../../hooks/useBookingApi';
import Book from '../book/Book';

const BookList = () => {
    const { result, loading, error } = useBookingApi();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (result && result.length > 0) {
        console.log(result);
        return (
            <div>
                <ul className="book-list">
                    {result.map((booking) => (
                    <Book key={booking.id} bookingSelected={booking} />
                ))}
                </ul>
                
            </div>
        );
    }

    return <div>No bookings found.</div>;
};

export default BookList;