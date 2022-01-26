import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { routes } from './routes';

import { AppHeader } from './js/cmps/AppHeader';
import { AppFooter } from './js/cmps/AppFooter';
import { Login } from './js/cmps/Login';
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export function App() {

  const isLoginShown = useSelector(state => state.systemModule.isLoginShown);
  const userMsg = useSelector(state => state.userModule.userMsg)

  return (
    <section className="main-app">
      <AppHeader />
      {userMsg && <ToastContainer style={{ top: 0 }} className="toast" theme={'dark'} style={{ zIndex: 1000 }} position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={true} pauseOnFocusLoss draggable pauseOnHover />}
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
      {isLoginShown && <Login />}
    </section>
  );
}