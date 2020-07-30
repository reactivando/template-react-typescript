import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { prerenderedLazy } from '@utils/prerenderedLazy';

const Example = prerenderedLazy(() => import('@pages/Example'));
const GenericNotFound = prerenderedLazy(() => import('@pages/GenericNotFound'));

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
