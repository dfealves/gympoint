import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Registration from '../pages/Registration';
import Plans from '../pages/Plans';
import PlanStore from '../pages/Plans/planStore';
import Students from '../pages/Students';
import StudentsStore from '../pages/Students/studentStore';
import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/registration" isPrivate component={Registration} />

      <Route path="/plans" isPrivate component={Plans} />
      <Route path="/planStore" isPrivate component={PlanStore} />

      <Route path="/students" isPrivate component={Students} />
      <Route path="/studentStore" isPrivate component={StudentsStore} />
      <Route path="/helporders" isPrivate component={HelpOrders} />

      <Route path="" component={() => <h1>Error 404: Page not Found </h1>} />
    </Switch>
  );
}
