import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Header from '../ui/Header';

const localizer = momentLocalizer(moment);
const events = [
  {
    title: 'Boss birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa'
  }
];

const CalendarScreen = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
    </React.Fragment>
  );
};

export default CalendarScreen;
