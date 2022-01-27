import logo from '../../assets/webzone/webzone-full-logo-medium.png'

export function AppFooter() {
    return (
        <footer className="app-footer flex">

            <div className='footer-container flex'>

                <img src={logo} alt="logo" />

                <div className='flex column content'>
                    <p>This site was created with <span>WEBzone</span>.</p>
                    <small>&copy; WEBzone</small>
                </div>

            </div>

        </footer>
    )
}