import React from "react";

const Confirmation = ({ bookingData }) => {
  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Thank you, {bookingData.name}, for your booking.</p>
      <p>
        Date: {bookingData.date}, Time: {bookingData.time}
      </p>
      <p>Guests: {bookingData.guests}</p>
      <p>We will contact you at {bookingData.email} if needed.</p>
    </div>
  );
};

export default Confirmation;
