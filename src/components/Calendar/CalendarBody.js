// import moment from "moment/moment";
import { useEffect, useState } from "react";
import { generateDate } from "../../utils/arrayOfDate";
import WeekDaysNames from "./WeekDaysNames";
import TotalDays from "./TotalDays";
import Dialog from "../Events/Dialog";
import dayjs from "dayjs";
import NewDialog from "../Events/NewDialog";
//-----------

const CalendarBody = ({ currentDate, defaultDate }) => {
  let month = currentDate.month();
  let year = currentDate.year();
  let totalDays = generateDate(month, year);

  const [selectedDate, setSelectedDate] = useState("");
  const [calendarEvent, setCalendarEvent] = useState(null);
  const [createEvent, setCreateEvent] = useState(null);
  const [addEvent, setAddEvent] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [eventsArray, setEventsArray] = useState([]);

  useEffect(() => {
    // console.log("selectedDate", selectedDate);
    // console.log("calendarEvent", calendarEvent);
    // console.log("createEvent", createEvent);
    // console.log("addEvent", addEvent);
  }, [calendarEvent, selectedDate]);

  return (
    <>
      {(addEvent || showEvent) && (
        <NewDialog
          setAddEvent={setAddEvent}
          addEvent={addEvent}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          eventsArray={eventsArray}
          setEventsArray={setEventsArray}
          setCreateEvent={setCreateEvent}
          calendarEvent={calendarEvent}
          setCalendarEvent={setCalendarEvent}
          showEvent={showEvent}
          setShowEvent={setShowEvent}
          createEvent={createEvent}
        />
      )}
      {/* {addEvent && (
        <Dialog
          setAddEvent={setAddEvent}
          addEvent={addEvent}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          eventsArray={eventsArray}
          setEventsArray={setEventsArray}
          setCreateEvent={setCreateEvent}
          calendarEvent={calendarEvent}
          setCalendarEvent={setCalendarEvent}
          description={description}
          setDescription={setDescription}
        />
      )} */}

      <div role="table" className="table">
        <div className="thead">
          <WeekDaysNames defaultDate={defaultDate} />
        </div>
        <div className="tbody">
          <TotalDays
            totalDays={totalDays}
            setCalendarEvent={setCalendarEvent}
            setAddEvent={setAddEvent}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            eventsArray={eventsArray}
            createEvent={createEvent}
            setCreateEvent={setCreateEvent}
            showEvent={showEvent}
            setShowEvent={setShowEvent}
          />

          {/* <EventsComponents selectEventHandler={selectEventHandler} /> */}
        </div>
      </div>
    </>
  );
};

export default CalendarBody;
