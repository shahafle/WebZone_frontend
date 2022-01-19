import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="main-header">
            <div className="header-content main-layout flex justify-between align-center">
                <Link className="clean-link logo" to="/">Brix</Link>
                <nav className="nav-menu flex align-center">
                    <Link className="clean-link nav-link" to="/"> Templates</Link>
                    <Link className="clean-link nav-link" to="/editor"> Editor</Link>
                    <Link className="clean-link nav-link" to="/"> Collection</Link>
                    <button className="nav-link btn-login"> Login</button>
                    {/* the button above should open the login modal no matter in which page we are */}
                    {/* <Link className="clean-link nav-link login" to="/"> Login</Link> */}
                </nav>
            </div>
        </header>
    )
} 