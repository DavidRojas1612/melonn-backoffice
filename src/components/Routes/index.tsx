import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../screens/Home';
import SellOrderDetail from '../../screens/SellOrderDetail';

function Routes() {
  return (
    <Router>
      <Suspense fallback="cargando...">
        <Switch>
          <Route exact path="/order-detail/:id" component={SellOrderDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
