import Book from "./Book/Book";

function BookList({books, deleteBookCallBack}){

    return (
        <div>
           {books.map(book => <Book details={book} deleteBookCallBack={deleteBookCallBack} />)}
           
        </div>
    )
}
export default BookList;