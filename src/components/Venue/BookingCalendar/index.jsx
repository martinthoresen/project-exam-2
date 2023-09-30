import React, { useCallback, useState } from "react";
import Calendar from "react-calendar";
import "../../../calendar.css";
import { format, isWithinInterval } from "date-fns";

const today = new Date();

/* function formatDate(date) {
  return format(date, "dd/MM/yyyy");
} */

function BookingCalendar(props) {
  let [value, onChange] = useState(new Date());

  let disabledDates = props.disabledDates;

  /* function disabledDates() {
    isWithinInterval(value, { bookedDatesFrom, bookedDatesTo });
  } 
  /* function SelectedDates() {
    if (value.length > 1) {
      let checkInDate = formatDate(value[0]);
      let leaveDate = formatDate(value[1]);

      let dayDifference = differenceInDays(value[0], value[1]);
      const nightCount = Math.abs(dayDifference);
      const totalPrice = nightCount * props.venueData.price;
      return (
        <div className="">
          <p className="my-2">
            From {checkInDate} to {leaveDate}
          </p>
          <p>{nightCount} night(s) </p>
          <p className="h3 text-right">Total: ${totalPrice}</p>
          <Button>Book Venue</Button>
        </div>
      );
    }
    return <p className="my-2">Select dates</p>;
  }
*/
  return (
    <div className="">
      <Calendar className="rounded shadow" selectRange onChange={onChange} minDate={today} value={value} />
    </div>
  );
}

export default BookingCalendar;
