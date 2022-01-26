import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { UserMsg } from './js/cmps/UserMsg'

import { routes } from './routes';

import { AppHeader } from './js/cmps/AppHeader';
import { AppFooter } from './js/cmps/AppFooter';
import { Login } from './js/cmps/Login';
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const msg = {
//   type: 'reg',
//   txt: '',
//   att: { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, className: "toast" }
// }


export function App() {

  const isLoginShown = useSelector(state => state.systemModule.isLoginShown);


  return (
    <section className="main-app">
      <AppHeader />
      <UserMsg />
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
      {isLoginShown && <Login />}
    </section>
  );
}