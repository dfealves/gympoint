import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Registration from '../pages/Registration';
import Plans from '../pages/Plans';
import Students from '../pages/Students';
import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registration" component={Registration} />
      <Route path="/plans" component={Plans} />
      <Route path="/students" component={Students} />
      <Route path="/helporders" component={HelpOrders} />
    </Switch>
  );
}
