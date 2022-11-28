import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ setBooking, booking }) => {
  const { bikeName, resalePrice, image } = booking;
  const { user } = useContext(AuthContext)

  const handleBooking = event => {
    event.preventDefault()
    const form = event.target;

    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      bikeName,
      resalePrice,
      name: user?.displayName,
      email: user?.email,
      image,
      phone,
      location
    }

    fetch('https://adventure-bikers-server.vercel.app/bookings', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success(`You have successfully booked ${bikeName}`)
          setBooking(null)
          form.reset()
        }
      })
  }

  return (
    <div>
      <input type="checkbox" id="bike-Booking-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h2 className='text-xl'>You are going to order this bike</h2>
          <label htmlFor="bike-Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Bike Model</span></label>
              <input type="text" disabled className="input w-full input-bordered" defaultValue={bikeName} />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Price</span></label>
              <input type="text" disabled className="input w-full input-bordered" defaultValue={resalePrice} />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Buyer Name</span></label>
              <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Name" className="input w-full input-bordered" />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Email</span></label>
              <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input w-full input-bordered" />
            </div>

            <input name='phone' type="text" placeholder="Enter Your Contact Number" className="input w-full input-bordered" required />

            <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />

            <input className='btn btn-accent w-full text-white' type="submit" value="Submit" />
            {/* <label htmlFor="bike-Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;