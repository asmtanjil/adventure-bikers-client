// import BookingModal from "../BookingModal/BookingModal";
import { useContext } from "react";
import toast from "react-hot-toast";
import { MdVerified } from "react-icons/md";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";


const ProductCard = ({ product, setBooking }) => {
  const { image, bikeName, sellerName, condition, phone, location, year, resalePrice, marketPrice, time, isVerified } = product;

  const { user } = useContext(AuthContext)

  const handleReportToAdmin = product => {
    const reportData = {
      buyerEmail: user?.email,
      image,
      bikeName,
      sellerName,
      resalePrice
    }

    fetch('https://adventure-bikers-server.vercel.app/reports', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Reported to Admin')
        }
      })

  }

  return (
    <div className="card w-90 md:w-96 lg:w-100 bg-amber-50 shadow-xl">
      <figure className='p-4'>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Model: {bikeName}</h2>
        <p><span className='font-semibold'>Condition: </span>{condition}</p>
        <p><span className='font-semibold'>Price: </span>{resalePrice} Bdt</p>
        <p><span className='font-semibold'>Market Price: </span>{marketPrice} Bdt</p>
        <p><span className='font-semibold'>Purchased Year: </span>{year}</p>
        {
          isVerified ?
            <p className="flex justify-start items-center gap-2"><span className='font-semibold'>Seller: </span> <MdVerified className="text-blue-600"></MdVerified> {sellerName}</p>
            :
            <p><span className='font-semibold'>Seller: </span>{sellerName}</p>
        }
        <p><span className='font-semibold'>Location: </span>{location}</p>
        <p><span className='font-semibold'>Phone: </span>{phone}</p>
        <p><span className='font-semibold'>Posted on: </span>{time}</p>
        <div className="card-actions justify-end">
          <label
            onClick={() => handleReportToAdmin(product)}
            className="btn text-white">Report To Admin</label>
          <label
            onClick={() => setBooking(product)}
            htmlFor="bike-Booking-Modal"
            className="btn btn-accent text-white">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;