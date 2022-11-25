import React from 'react';

const BookingModal = () => {
  return (
    <div>
      <input type="checkbox" id="bike-Booking-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"></h3>
          <p className="py-4"></p>
          <div className="modal-action">
            <label htmlFor="bike-Booking-Modal" className="btn">Confirm</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;