import moment from 'moment';
import React, { HTMLAttributes } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/actions/uiActions';
import { RootState } from '../../redux/reducers';
import Header from '../ui/Header';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { setActive } from '../../redux/actions/calendarActions';

const localizer = momentLocalizer(moment);

type ICalendar = 'month' | 'week' | 'day' | 'work_week' | 'agenda';

const CalendarScreen = () => {
  const { events } = useSelector((state: RootState) => state.calendar);
  const dispatch = useDispatch();
  const [lastView, setLastView] = React.useState(localStorage.getItem('lastView') || 'month');

  const onViewChange = (e: ICalendar) => {
    localStorage.setItem('lastView', e);
    setLastView(e);
  };
  // const onDobleClick = (e: any) => {
  //   console.log('e :>> ', e);
  //   dispatch(openModal());
  // };
  const onSelect = (e: any) => {
    dispatch(setActive(e));
    dispatch(openModal());
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
        onSelectEvent={onSelect}
        components={{ event: CalendarEvent }}
      />
      <CalendarModal />
    </React.Fragment>
  );
};

export default CalendarScreen;
