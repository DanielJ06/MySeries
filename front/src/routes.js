import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import EditSerie from './pages/EditSerie';

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/edit" component={EditSerie} />
    </Switch>
  );
}

export default Routes
