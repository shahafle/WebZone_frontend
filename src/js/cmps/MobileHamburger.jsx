import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Screen } from './Screen';

import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosLogIn } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';


export function MobileHamburger({ user, shouldShowLogin, onLogout }) {
   const dispatch = useDispatch();
   const [isMenuOpen, toggleMobileMenu] = useState(false)

   const onToggleMenu = () => {
      toggleMobileMenu(!isMenuOpen)
   }

   const onLogin = () => {
      dispatch(shouldShowLogin(true));
      onToggleMenu();
   }


   return <div className='mobile-menu flex column'>
      <AiOutlineMenu onClick={onToggleMenu} className='hamburger-btn' />

      {isMenuOpen && <Screen cb={onToggleMenu} />}
      <nav className={`flex column ${!isMenuOpen ? 'close' : ''}`} >
         <div className='top-bar'>
            <AiOutlineMenu onClick={onToggleMenu} className='hamburger-btn' />

            {/* User */}
            {!user && <button className="nav-link btn-login flex align-center"
               onClick={onLogin}><span>Login</span> <IoIosLogIn /></button>}

            {user &&
               <div className="greet-user flex align-center">
                  <p>Hello {user.nickname}</p>
                  <div className="user-icon-container flex align-center" onClick={() => { dispatch(onLogout()) }}>
                     {/* <FaUser /> */}
                     <MdLogout title="Logout" style={{ fontSize: "1.2rem", color: "#0c0c0c" }} />
                  </div>
               </div>}
            {/* User */}

         </div>
         <NavLink className="clean-link nav-link" to="/" onClick={onToggleMenu}> Home Page</NavLink>
         <NavLink className="clean-link nav-link" to="/templates" onClick={onToggleMenu}> Templates</NavLink>
         <NavLink className="clean-link nav-link" to="/editor" onClick={onToggleMenu}> Editor</NavLink>
         <NavLink className="clean-link nav-link" to="/collection" onClick={onToggleMenu}> Collection</NavLink>

      </nav>
   </div >

}
