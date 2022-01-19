import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="main-header">
            <div className="header-content flex justify-between">
                <h2 className="logo">Brix</h2>
                <nav className="main-nav flex align-center">
                    <div className="container">
                        <Link to="/"> Collection</Link>
                        <Link to="/editor"> Editor</Link>
                        <Link to="/"> Templates</Link>
                        <Link to="/"> Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
} 