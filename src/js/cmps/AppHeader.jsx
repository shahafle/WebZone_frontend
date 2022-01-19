import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="main-header">
            <div className="header-content main-layout flex justify-between align-center">
                <h1 className="logo">Brix</h1>
                <nav className="nav-menu flex align-center">
                    <Link className="clean-link nav-link" to="/"> Collection</Link>
                    <Link className="clean-link nav-link" to="/editor"> Editor</Link>
                    <Link className="clean-link nav-link" to="/"> Templates</Link>
                    <Link className="clean-link nav-link" to="/"> Login</Link>
                </nav>
            </div>
        </header>
    )
} 