import moment from 'moment';
import React, { HTMLAttributes } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ICalendarEvent } from '../../models/calendarEvent';
import Header from '../ui/Header';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
const localizer = momentLocalizer(moment);

const events: ICalendarEvent[] = [
  {
    title: 'Boss birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'By coffe',
    user: { name: 'Jose Banega', uid: '123abcd' }
  }
];
type ICalendar = 'month' | 'week' | 'day' | 'work_week' | 'agenda';

const CalendarScreen = () => {
  const [lastView, setLastView] = React.useState(localStorage.getItem('lastView') || 'month');

  const onViewChange = (e: ICalendar) => {
    localStorage.setItem('lastView', e);
    setLastView(e);
  };
  const onDobleClick = (e: any) => {
    console.log('e :>> ', e);
  };
  const onSelect = (e: any) => {
    console.log('e :>> ', e);
  };
  const eventStyleGetter = (e: {
    title: string;
    start: Date;
    end: Date;
    bgcolor: string;
  }): HTMLAttributes<HTMLDivElement> => {
    console.log('e :>> ', e);
    const style = {
      backgroundColor: '#0f0f5f',
      color: '#fff',
      opacity: 0.8,
      borderRadius: '4px'
    };
    return { style };
  };
  return (
    <React.Fragment>
      <Header></Header>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        view={lastView as ICalendar}
        onView={onViewChange}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelect}
        components={{ event: CalendarEvent }}
      />
      <CalendarModal />
    </React.Fragment>
  );
};

export default CalendarScreen;
