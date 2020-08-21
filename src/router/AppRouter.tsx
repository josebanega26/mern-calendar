import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={CalendarScreen}></Route>
      <Route exact path="/login" component={LoginScreen}></Route>
    </Switch>
  );
};

export default AppRouter;
