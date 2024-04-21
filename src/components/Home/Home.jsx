import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    } ,[])

    return (
        <div>

            <Banner></Banner>

            <div>

                <div className="mb-6">
                    <h1 className="text-center text-4xl font-bold">Books</h1>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;