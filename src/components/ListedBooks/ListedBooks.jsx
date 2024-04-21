import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
const ListedBooks = () => {

    const getStoredReadList = () => {
        const storedReadList = localStorage.getItem("readList");
        if (storedReadList) {
          return JSON.parse(storedReadList);
        }
        return [];
      };

      const getStoredWishList = () => {
        const storedWishList = localStorage.getItem("wishList");
        if (storedWishList) {
          return JSON.parse(storedWishList);
        }
        return [];
      };

    const books = useLoaderData();

    const [readLists, setReadLists] = useState([]);
    const [wishLists, setWishLists] = useState([]);
    const [dreadLists, dsetReadLists] = useState([]);
    const [dwishLists, dsetWishLists] = useState([]);

    // const [bookRatingList, setBookRatingList] = useState([]);
    // let bookRating = [];
    // readLists.map(book => {
    //   bookRating.push(book.rating);
    // })
    // bookRating.sort();
    // console.log(bookRating);



    useEffect( ()=>{
        const storeReadIds = getStoredReadList();
        const storeWishIds = getStoredWishList();
        if(books.length > 0){
            const readList = [];
            const wishList = [];
            for (const id of storeReadIds) {
                const book = books.find(book => book.bookId === id);
                if(book){
                    readList.push(book);
                }
            }
            setReadLists(readList);
            dsetReadLists(readList);
            for (const id of storeWishIds) {
                const book = books.find(book => book.bookId === id);
                if(book){
                    wishList.push(book);
                }
            }
            setWishLists(wishList);
            dsetWishLists(wishList);
        }
    },[books])

    console.log(readLists);
    const handleBookListfilter = (filter) => {
      if (filter === 'ratings') {
        const sortedReadList = [...readLists].sort((a, b) => a.rating - b.rating);
        const sortedWishList = [...wishLists].sort((a, b) => a.rating - b.rating);
        dsetReadLists(sortedReadList);
        dsetWishLists(sortedWishList);
      }
      if (filter === 'years') {
        const sortedReadList = [...readLists].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        const sortedWishList = [...wishLists].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        dsetReadLists(sortedReadList);
        dsetWishLists(sortedWishList);
      }
      if (filter === 'pages') {
        const sortedReadList = [...readLists].sort((a, b) => a.totalPages - b.totalPages);
        const sortedWishList = [...wishLists].sort((a, b) => a.totalPages - b.totalPages);
        dsetReadLists(sortedReadList);
        dsetWishLists(sortedWishList);
      }
    }
    

  return (
    <div>
      <h2 className="text-3xl font-bold text-center p-8 bg-[#1313130D] rounded-2xl my-5">
        Books
      </h2>

      <div className="flex items-center justify-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-white m-1 bg-[#23BE0A]"
          >
            Sort By{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5 8.25L12 15.75L4.5 8.25"
                stroke="white"
                className="text-white"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=>handleBookListfilter('ratings')}>
              <a>Rating</a>
            </li>
            <li onClick={()=>handleBookListfilter('pages')}>
              <a>Number of Pages</a>
            </li>
            <li onClick={()=>handleBookListfilter('years')}>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
          {
                dreadLists.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div>
          {
                dwishLists.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
