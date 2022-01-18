import { Switch, Route } from 'react-router';

import { routes } from './routes';

import { AppHeader } from './js/cmps/AppHeader';
import { AppFooter } from './js/cmps/AppFooter';


export function App() {
  return (
    <>
      <AppHeader />
      <Switch>
        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
      <AppFooter />
    </>
  );
}