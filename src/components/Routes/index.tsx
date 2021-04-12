import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateSellOrder from '../../screens/CreateSellOrder';
import SellOrderDetail from '../../screens/SellOrderDetail';
import Home from '../../screens/Home';
import Header from '../Header';

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback="cargando...">
        <Switch>
          <Route exact path="/order-detail/:id" component={SellOrderDetail} />
          <Route exact path="/create-sell-order" component={CreateSellOrder} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
