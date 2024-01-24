import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BooksList from "./Components/BooksList";
import Navbar from "./Components/Navbar";
import AddBooks from "./Components/AddBooks";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/books")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const addNewBook = (newBookData) => {
    console.log(newBookData);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksList books={data} />} />
        <Route path="/books" element={<AddBooks addBook={addNewBook} />} />
      </Routes>
    </>
  );
}

export default App;
