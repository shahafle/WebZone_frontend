import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


export function MobileHamburger() {
   const dispatch = useDispatch();
   const [isMenuOpen, toggleMobileMenu] = useState(false)

   const onToggleMenu = () => {
      dispatch(toggleMobileMenu(!isMenuOpen))
   }

   return <div className='mobile-menu flex column'>
      <AiOutlineMenu onClick={onToggleMenu} className='hamburger-btn' />


      <nav className={`flex column ${!isMenuOpen ? 'close' : ''}`} >
         <AiOutlineMenu onClick={onToggleMenu} className='hamburger-btn' />
         <NavLink className="clean-link nav-link" to="/" onClick={onToggleMenu}> Home Page</NavLink>
         <NavLink className="clean-link nav-link" to="/templates" onClick={onToggleMenu}> Templates</NavLink>
         <NavLink className="clean-link nav-link" to="/editor" onClick={onToggleMenu}> Editor</NavLink>
         <NavLink className="clean-link nav-link" to="/collection" onClick={onToggleMenu}> Collection</NavLink>

      </nav>

   </div>
}