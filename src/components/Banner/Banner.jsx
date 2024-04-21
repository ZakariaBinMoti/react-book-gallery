import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mx-3 lg:mx-0 my-12 flex lg:flex-row flex-col-reverse items-center justify-between px-28 py-20 bg-[#1313130D] rounded-3xl">
      <div className="space-y-8">
        <h1 className="lg:text-6xl text-3xl font-bold mb-8 playfare">
          Books to freshen up <br /> your bookshelf
        </h1>
        <Link to="/listedbooks"><button className="btn bg-[#23BE0A] text-white">View The List</button></Link>
        
      </div>
      <div>
        <img
          src="https://i.ibb.co/WVrmwRP/Header-Book.png"
          alt="header image"
        />
      </div>
    </div>
  );
};

export default Banner;
