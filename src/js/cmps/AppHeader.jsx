import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import { shouldShowLogin } from '../store/system.action';

export function AppHeader() {

    const dispatch = useDispatch();


    return (
        <>
        <header className="main-header flex justify-between align-center">
            <Link className="clean-link logo" to="/">Brix</Link>
            <nav className="nav-menu flex align-center">
                <Link className="clean-link nav-link" to="/"> Templates</Link>
                <Link className="clean-link nav-link" to="/editor"> Editor</Link>
                <Link className="clean-link nav-link" to="/"> Collection</Link>
                <button className="nav-link btn-login" onClick={() => dispatch(shouldShowLogin(true))}> Login</button>
            </nav>
        </header>
        <div className="placeholder"></div>
        {/* The above is used for the Editor Page positioning */}
        </>
    )
} 