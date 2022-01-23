import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { ReactComponent as YourSvg } from '../../assets/webzone/webzone-full-logo-heavy.svg';
import { NavLink, useLocation } from 'react-router-dom';

import { AiOutlineLogin } from 'react-icons/ai'

import { shouldShowLogin } from '../store/system.action';
import logo from '../../assets/webzone/webzone-full-logo-small.png'

export function AppHeader() {

    const dispatch = useDispatch();
    const location = useLocation();

    const [homeClass, setHomeClass] = useState('home-page');

    useEffect(() => {
        if (location.pathname === '/') setHomeClass('home-page')
        else setHomeClass('')
    }, [location])

    return (
        <>
            <header className={`main-header flex justify-between align-center ${homeClass}`}>
                <Link className="clean-link logo" to="/">
                    {/* <YourSvg style={{ width: '100px', height: '100px' }} /> */}
                    <img src={logo} alt="no" />
                </Link>
                <nav className="nav-menu flex align-center">
                    <NavLink className="clean-link nav-link" to="/templates"> TEMPLATES</NavLink>
                    <NavLink className="clean-link nav-link" to="/editor"> EDITOR</NavLink>
                    <NavLink className="clean-link nav-link" to="/collection"> COLLECTION</NavLink>
                </nav>
                <button className="nav-link btn-login flex align-center" onClick={() => dispatch(shouldShowLogin(true))}>Login <AiOutlineLogin /></button>
            </header>
            <div className="placeholder"></div>
            {/* The above is used for the Editor Page positioning */}
        </>
    )
} 