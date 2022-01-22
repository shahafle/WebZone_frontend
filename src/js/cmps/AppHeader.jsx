import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { AiOutlineLogin } from 'react-icons/ai'

import { shouldShowLogin } from '../store/system.action';

export function AppHeader() {

    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/editor') console.log('hi')
    }, [location])


    return (
        <>
            <header className="main-header flex justify-between align-center">
                <NavLink className="clean-link logo" to="/">Brix</NavLink>
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