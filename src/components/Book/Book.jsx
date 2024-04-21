import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    // console.log(book);
    const {bookId,bookName, author,image, category, rating, tags} = book;
    return (
        <Link to={`/book/${bookId}`}>
        <div className="rounded-2xl border border-gray-300 p-6 space-y-4">
            <div className="bg-[#F3F3F3] rounded-2xl p-8 flex items-center justify-center">
                <img className='max-h-[166px]' src={image} alt="" />
            </div>
            <div className="flex gap-2">
                {
                    tags.map( (tag,idx) => <p key={idx} className="text-[#23BE0A] bg-[#23BE0D0D] rounded-full px-4 py-1">{tag}</p> )
                }
            </div>
            <h3 className="text-2xl font-bold playfare">{bookName}</h3>
            <p>By : {author}</p>
            <hr className="border-dashed" />
            <div className="flex justify-between items-center">
                <p>{category}</p>
                <p className="flex gap-1">{rating} <img src="/Frame.svg" alt="" /> </p>
            </div>
        </div>
        </Link>
    );
};


Book.propTypes = {
    book: PropTypes.object
}


export default Book;