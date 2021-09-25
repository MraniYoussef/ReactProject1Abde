import { useEffect, useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [books , setBooks] = useState(null);
  const [booksFiltred, setBooksFiltred] = useState(null);

  useEffect(() => {
    //Appel webService
    setBooks ([
      {id: 0 , imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEfmk_e9IiWHIWsITzbxxfcQicM5FnvEpkQ&usqp=CAU',title: 'book1', description: 'book1 description'},
      {id: 1 , imageUrl:'https://s3-ap-southeast-2.amazonaws.com/assets.allenandunwin.com/images/small/9781783125999.jpg',title: 'book2', description: 'book2 description'},
      {id: 2 , imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPH5Bb8XOdypBKodKC1LnJplAgcazs_9eUQ&usqp=CAU',title: 'book3', description: 'book3 description'}
    ] );
   
  }, []);

  useEffect(() => {
    setBooksFiltred(books);
  }, [books] )

  const filterBooks = keyword => {
    const newFiltredBooks = books && books.filter(book => book.title.includes(keyword))
    setBooksFiltred(newFiltredBooks);
  }

  const addBook = data => {
    const lastId = books.length === 0 ? 0 : books[books.length -1].id;
    const newId = lastId + 1;
    const book = {
      ...data,
      id: newId,
    }
    setBooks([...books, book]);
  }

  const deleteBook = id => {
    const newBooks = books.filter(book => book.id !== id);
    setBooks([...newBooks]);
  }
  return (
    <>
      <Header />
      <SearchBar filterBooksCallBack={filterBooks} />
       {booksFiltred
      ? <BookList books={booksFiltred} deleteBookCallBack={deleteBook} /> 
      : <div> Loading...</div>
      }
            <AddBookForm addBookCallBack={addBook}/>

    </>
  );
}

export default App;
