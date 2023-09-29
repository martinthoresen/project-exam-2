import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../../calendar.css";

import { Button } from "react-bootstrap";

function BookingCalendar() {
  const [value, onChange] = useState(new Date());
  const today = new Date();
  console.log(value);
  return (
    <div>
      <Calendar className="rounded shadow" selectRange onChange={onChange} minDate={today} value={value} /> <Button className="btn btn-primary">Book</Button>
    </div>
  );
}

export default BookingCalendar;
