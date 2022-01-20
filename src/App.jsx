import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { routes } from './routes';

import { AppHeader } from './js/cmps/AppHeader';
import { AppFooter } from './js/cmps/AppFooter';
import { Login } from './js/cmps/Login';


export function App() {

  const isLoginShown = useSelector(state => state.systemModule.isLoginShown);

  return (
    <section className="main-app">
      <AppHeader />
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
      {/* <AppFooter /> */}
      {isLoginShown && <Login />}
    </section>
  );
}