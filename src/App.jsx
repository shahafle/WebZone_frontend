import { Routes, Route } from 'react-router-dom';

import { routes } from './routes';

import { AppHeader } from './js/cmps/AppHeader';
import { AppFooter } from './js/cmps/AppFooter';


export function App() {
  return (
    <section className="main-app">
      <AppHeader />
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
      <AppFooter />
    </section>
  );
}