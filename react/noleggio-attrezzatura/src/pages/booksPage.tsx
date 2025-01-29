import BookList from '../components/book-list/BookList';
import Navbar from '../components/navbar/Navbar';
import '../assets/styles/bookingPage.css';
const BooksPage = () => {
    return (
        <>
            <Navbar />
            <div className="booking-page">
                <h1>Books</h1>
                <BookList />
            </div>
        </>
    );
}

export default BooksPage;