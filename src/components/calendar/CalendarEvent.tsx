import React from 'react';
import { ICalendarEvent } from '../../models/calendarEvent';

type ICalendarEventProps = {
  event: ICalendarEvent;
};
const CalendarEvent: React.FC<ICalendarEventProps> = ({ event: { title } }) => {
  return (
    <div>
      <span>{title}</span>
    </div>
  );
};

export default CalendarEvent;
