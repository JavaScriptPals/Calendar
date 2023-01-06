import React from 'react';
import CalendarWord from './CalendarWord'

const Calendar = ({prop}) => {
  return (
    <>
      <div>This is the Calendar</div>
      {prop.map(string => {
        return (
          <div>{string}</div>
        )
      })}
    </>
  );
};

export default Calendar;