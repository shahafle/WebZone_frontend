import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { ReactComponent as YourSvg } from '../../assets/webzone/webzone-full-logo-heavy.svg';
import { NavLink, useLocation } from 'react-router-dom';

import { shouldShowLogin } from '../store/system.action';
import { onLogout } from '../store/user.action';

import { AiOutlineLogin } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/webzone/webzone-full-logo-small.png'

export function AppHeader() {

    const dispatch = useDispatch();
    const location = useLocation();

    const user = useSelector(state => state.userModule.user);

    const [headerClass, setHeaderClass] = useState('');
    const [placeholderClass, setPlaceholderClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        // HomePage :
        if (location.pathname === '/') setPlaceholderClass('display-none');

        // PublishPage :
        else if (location.pathname.includes('/publish')) {
            setHeaderClass('display-none');
            setPlaceholderClass('display-none');
        }

        // EditorPage :
        else if (location.pathname === '/editor') {
            setHeaderClass('minimized');
            setPlaceholderClass('minimized');
        }

        else {
            setHeaderClass('');
            setPlaceholderClass('');
        }

    }, [location])

    const handleScroll = () => {
        if (window.scrollY < 140) setHeaderClass('');
        if (window.scrollY > 140) setHeaderClass('active-scroll-1');
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

                {!user && <button className="nav-link btn-login flex align-center" onClick={() => dispatch(shouldShowLogin(true))}>Login <AiOutlineLogin /></button>}

                {user &&
                    <div className="greet-user flex align-center">
                        <p>Hello {user.nickname}</p>
                        <div className="user-icon-container flex align-center" onClick={() => dispatch(onLogout())}>
                            <FaUser />
                        </div>
                    </div>}

            </header>
            <div className={`placeholder ${placeholderClass === 'display-none' ? 'display-none' : ''}`}></div>
            {/* The above is used for the Editor Page positioning */}
        </>
    )
} 