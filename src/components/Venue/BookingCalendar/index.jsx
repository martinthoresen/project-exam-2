import React, { useCallback, useState } from "react";
import Calendar from "react-calendar";
import "../../../calendar.css";
import { differenceInDays, format, isSameDay, isWithinInterval } from "date-fns";
import { Button, InputGroup, Row } from "react-bootstrap";
import postApi from "../../../post/postApi";
import baseUrl from "../../../utility/constants/baseUrl";

const today = new Date();

function formatDate(date) {
  return format(date, "dd/MM/yyyy");
}

function BookingCalendar(props) {
  let [value, onChange] = useState(new Date());

  const bookedDatesTo = props.bookedDatesTo;
  const bookedDatesFrom = props.bookedDatesFrom;
  const maxGuests = props?.maxGuests;
  const venueId = props?.venueData.id;
  const bookedDatesToFormatted = bookedDatesTo?.map((date) => formatDate(date));
  const bookedDatesFromFormatted = bookedDatesFrom?.map((date) => formatDate(date));
  const disabledDatesFormatted = bookedDatesFromFormatted?.map((e, i) => [e, " to " + bookedDatesToFormatted[i]]);
  console.log(disabledDatesFormatted);

  function BookedDates() {
    return (
      <Row>
        <h2>Bookings for this date:</h2>
        {disabledDatesFormatted?.map((date) => (
          <p> {date}</p>
        ))}
      </Row>
    );
  }

  function SelectedDates() {
    if (value.length > 1) {
      let checkInDate = formatDate(value[0]);
      let leaveDate = formatDate(value[1]);
      console.log(checkInDate);
      let dayDifference = differenceInDays(value[0], value[1]);
      const nightCount = Math.abs(dayDifference);
      const totalPrice = nightCount * props.venueData.price;

      function handleBooking() {
        const guestNumberContainer = document.querySelector("#guest-number");
        const bookingContainer = document.querySelector("#booking-container");

        const guestValue = Number(guestNumberContainer.value);
        const bookingData = { dateFrom: new Date(value[0]), dateTo: new Date([value[1]]), guests: guestValue, venueId: venueId };
        console.log(bookingData);
        postApi(baseUrl + `/holidaze/bookings`, bookingData, bookingContainer);
      }

      return (
        <div className="">
          <p className="my-2">
            From {checkInDate} to {leaveDate}
          </p>
          <p>{nightCount} night(s) </p>
          <p>Number of guests:</p>

          <input className="rounded" id="guest-number" type="number" defaultValue={1} min={1} max={maxGuests} />
          <p className="h3 text-right">Total: ${totalPrice}</p>

          <Button onClick={handleBooking}>Book Venue</Button>
          <div id="booking-container"></div>
        </div>
      );
    }
    return <p className="my-2">Select dates</p>;
  }

  return (
    <div>
      <Calendar className="rounded shadow" selectRange onChange={onChange} minDate={today} value={value} />
      <SelectedDates />
      <BookedDates />
    </div>
  );
}

export default BookingCalendar;
