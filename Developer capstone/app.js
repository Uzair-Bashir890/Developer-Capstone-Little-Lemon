import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";
import "./App.css";

function App() {
  const [bookingData, setBookingData] = useState(null);

  const handleBookingSubmit = (data) => {
    setBookingData(data);
  };

  return (
    <div className="App">
      <header>
        <h1>Little Lemon Restaurant</h1>
        <p>Book your table online!</p>
      </header>

      {!bookingData ? (
        <BookingForm onSubmit={handleBookingSubmit} />
      ) : (
        <Confirmation bookingData={bookingData} />
      )}
    </div>
  );
}

export default App;
