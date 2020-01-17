import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Registrations from '~/pages/Registrations';
import RegistrationDetails from '~/pages/Registrations/RegistrationDetails';
import RegistrationNew from '~/pages/Registrations/RegistrationNew';

import Plans from '../pages/Plans';
import PlanStore from '../pages/Plans/planStore';

import Students from '../pages/Students';
import StudentsStore from '../pages/Students/studentStore';

import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/registrations" exact isPrivate component={Registrations} />
      <Route
        path="/registrations/details"
        component={RegistrationNew}
        isPrivate
      />
      <Route
        path="/registrations/details/:id"
        component={RegistrationDetails}
        isPrivate
      />

      <Route path="/plans" isPrivate component={Plans} />
      <Route path="/planStore" isPrivate component={PlanStore} />

      <Route path="/students" isPrivate component={Students} />
      <Route path="/studentStore" isPrivate component={StudentsStore} />
      <Route path="/helporders" isPrivate component={HelpOrders} />

      <Route path="" component={() => <h1>Error 404: Page not Found </h1>} />
    </Switch>
  );
}
