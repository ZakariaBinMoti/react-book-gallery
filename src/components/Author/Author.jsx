import { useEffect, useState } from "react";
import AuthorTable from "../AuthorTable/AuthorTable";

const Author = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Books</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

               {
                books.map(book => <AuthorTable key={book.bookId} book={book}></AuthorTable>)
            }

            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Author;
