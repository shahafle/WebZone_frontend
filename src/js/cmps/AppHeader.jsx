import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="main-header flex justify-between">
            <h2>LOGO</h2>
            <nav className="main-nav flex align-center">
                <div>
                    <Link to="/"> Collection</Link>
                    <Link to="/editor"> Editor</Link>
                    <Link to="/"> Templates</Link>
                    <Link to="/"> Login</Link>
                </div>
            </nav>
        </header>
    )
} 