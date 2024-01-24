import React from "react";
import BookItems from "./BookItems";

const BooksList = ({ books }) => {
  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <BookItems key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
