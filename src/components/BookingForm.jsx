import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { submitAPI } from "../utils/api";

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const { times } = availableTimes;
  const [bookings, setBookings] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  useEffect(() => {
    localStorage.setItem("Bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((bookings.date, bookings.time, bookings.guests !== "")) {
      submitAPI();
      navigate("/confirmed");

      console.log(`
      Date: ${bookings.date},
      Time: ${bookings.time},
      Number of Guests: ${bookings.guests},
      Occasion: ${bookings.occasion}`);

      // RESET VALUE TO INITIAL STATE
      setBookings({
        date: "",
        time: "17:00",
        guests: "",
        occasion: "Birthday",
      });
    } else {
      console.log("THERE IS AN ERROR SUBMITTING YOUR FORM");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBookings({ ...bookings, [name]: value });
  };

  return (
    <div className="bg-yellow-400 flex justify-center items-center">
      <section className="font-Karla p-10">
        <div className="text-2xl flex items-center justify-center p-5">
          <h1>Book A Table Now!</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-500 h-100 flex flex-col justify-around">
          <div className="flex bg-red-500 h-10 justify-center items-center">
            <label>Date of reservation:</label>
            <input
              type="date"
              name="date"
              id="res-date"
              value={bookings.date}
              aria-label="On Change"
              onChange={(e) => {
                setBookings({ ...bookings, date: e.target.value });
                dispatch({
                  type: "UPDATE_TIMES",
                  date: new Date(e.target.value),
                });
              }}
              required={true}
            />
          </div>
          <div className="flex bg-red-500 h-10 justify-center items-center">
            <label>Choose time:</label>
            <select
              id="res-time"
              name="time"
              value={bookings.time}
              onChange={handleChange}
              required={true}
              className="flex-1">
              {times?.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="flex bg-red-500 h-10 justify-center items-center">
            <label>Number of Guests:</label>
            <input
              type="number"
              placeholder="1-20"
              min="1"
              max="20"
              id="guests"
              name="guests"
              value={bookings.guests}
              onChange={handleChange}
              aria-label="On Change"
              required={true}
              className="flex-1"
            />
          </div>

          <div className="flex bg-red-500 h-10 justify-center items-center">
            <label>Occasion:</label>
            <select
              name="occasion"
              value={bookings.occasion}
              onChange={handleChange}
              id="occasion"
              className="flex-1">
              <option>Dinner</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <div className="bg-white flex h-10 justify-center items-center">
            <label data-test-id="formSubmit">Reserve Table:</label>
            <input
              type="submit"
              className="bg-red-500"
              data-test-id="formSubmit"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookingForm;
