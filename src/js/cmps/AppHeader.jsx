import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { ReactComponent as YourSvg } from '../../assets/webzone/webzone-full-logo-heavy.svg';
import { shouldShowLogin } from '../store/system.action';
import logo from '../../assets/webzone/webzone-full-logo-small.png'

export function AppHeader() {

    const dispatch = useDispatch();

    return (
        <>
            <header className="main-header flex justify-between align-center">
                <Link className="clean-link logo" to="/">
                    {/* <YourSvg style={{ width: '100px', height: '100px' }} /> */}
                    <img src={logo} alt="no" />
                </Link>
                <nav className="nav-menu flex align-center">
                    <Link className="clean-link nav-link" to="/templates"> Templates</Link>
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