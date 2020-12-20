import BookCotextProvider from './contexts/BookContext'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import BookForm from './components/BookForm'

function App() {
  return (
    <div className="App">
      <BookCotextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookCotextProvider>
    </div>
  );
}

export default App;
