import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Example = lazy(() => import('@pages/Example'));
const GenericNotFound = lazy(() => import('@pages/GenericNotFound'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Example} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
