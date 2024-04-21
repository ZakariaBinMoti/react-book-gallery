import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
// import { saveReadList } from '../../utility/localStorage';

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);
  const {
    bookName,
    author,
    image,
    category,
    totalPages,
    tags,
    review,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const getStoredReadList = () => {
    const storedReadList = localStorage.getItem("readList");
    if (storedReadList) {
      return JSON.parse(storedReadList);
    }
    return [];
  };

  const saveReadList = (bookId) => {
    const storedReadList = getStoredReadList();
    const exists = storedReadList.find((id) => id === bookId);
    if (!exists) {
      storedReadList.push(bookId);
      localStorage.setItem("readList", JSON.stringify(storedReadList));
      toast.success("Book added to Read List");
    } else {
      toast.error("You have already read this book");
    }
  };

  const getStoredWishList = () => {
    const storedWishList = localStorage.getItem("wishList");
    if (storedWishList) {
      return JSON.parse(storedWishList);
    }
    return [];
  };

  const saveWishList = (bookId) => {
    const storedWishList = getStoredWishList();
    const storedReadList = getStoredReadList();
    const exists = storedWishList.find((id) => id === bookId);
    const existsInReadList = storedReadList.find((id) => id === bookId);
    if (!exists && !existsInReadList) {
      storedWishList.push(bookId);
      localStorage.setItem("wishList", JSON.stringify(storedWishList));
      toast.success("Book added to WishList");
    } 
    else if(exists && !existsInReadList) {
      toast.error("Book already added to WishList");
    }
    if(existsInReadList){
      toast.error("You Have already read this book");
    }
  };

  const handleRead = () => {
    saveReadList(idInt);
  };

  const handleWishList = () => {
    saveWishList(idInt);
  };

  return (
    <div className="flex mx-3 lg:mx-0 flex-col lg:flex-row gap-12 my-12">
      <div className="p-20 bg-[#F3F3F3] rounded-2xl">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="space-y-4">
        <h3 className="text-4xl playfare">{bookName}</h3>
        <p>By: {author}</p>
        <hr />
        <p>{category}</p>

        <hr />

        <p>
          <span className="font-bold">Review:</span> {review}
        </p>
        <div>
          <p className="flex gap-4">
            Tag:
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className="text-[#23BE0A] bg-[#23BE0D0D] rounded-full px-4 py-1"
              >
                #{tag}
              </p>
            ))}
          </p>
        </div>
        <hr />
        <table>
          <tr>
            <td className="pr-20">Number of Pages:</td>
            <td className="font-semibold">{totalPages}</td>
          </tr>
          <tr>
            <td>Publisher:</td>
            <td className="font-semibold">{publisher}</td>
          </tr>
          <tr>
            <td>Year of Publishing:</td>
            <td className="font-semibold">{yearOfPublishing}</td>
          </tr>
          <tr>
            <td>Rating:</td>
            <td className="font-semibold">{rating}</td>
          </tr>
        </table>

        <div className="space-x-3">
          <button onClick={handleRead} className="btn">
            Read
          </button>
          <button
            onClick={handleWishList}
            className="btn bg-[#50B1C9] text-white"
          >
            Wishlist
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BookDetails;
