import BookList from '../components/book-list/BookList';
import Navbar from '../components/navbar/Navbar';

const BooksPage = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>Books</h1>
                <BookList />
            </div>
        </>
    );
}

export default BooksPage;