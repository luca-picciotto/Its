export function BookModule() {
    return (
        <div className="book-module">
            <h1>Book Module</h1>
            <div className="book-module-form">
                <input type="text" placeholder="Equipment ID" />
                <input type="number" placeholder="Duration" />
                <button>Book</button>
            </div>
        </div>
    )
}
export default BookModule;