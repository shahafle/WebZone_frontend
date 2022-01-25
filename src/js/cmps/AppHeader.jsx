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

    const [headerClass, setHeaderClass] = useState('');
    const [placeholderClass, setPlaceholderClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        if (location.pathname === '/') setPlaceholderClass('display-none');

        else if (location.pathname.includes('/publish')) {
            setHeaderClass('display-none');
            setPlaceholderClass('display-none');
        }

        else {
            setHeaderClass('');
            setPlaceholderClass('');
        }

    }, [location])

    const handleScroll = () => {
        if (window.scrollY < 200) setHeaderClass('');
        if (window.scrollY > 200) setHeaderClass('active-scroll-1');
        if (window.scrollY > 400) setHeaderClass('active-scroll-2');
        if (window.scrollY > 750) setHeaderClass('active-scroll-3');
    }


    return (
        <>
            <header className={`main-header flex justify-between align-center ${headerClass}`}>
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
            <div className={`placeholder ${placeholderClass === 'display-none' ? 'display-none' : ''}`}></div>
            {/* The above is used for the Editor Page positioning */}
        </>
    )
} 