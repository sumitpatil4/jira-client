import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown,setDropdown] = useState(false);
  const [dropdown1,setDropdown1]=useState(false);
  const [dropdown2,setDropdown2]=useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
      
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <span>A</span>ccolite
          <span>J</span>ira
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
             Your Work<span></span>&nbsp;<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown/>}
            
          </li>
          </div>
          <div>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects<span></span>&nbsp;<i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown1/>}
          </li>
          </div>
          <div>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/teams'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Teams<span></span>&nbsp;<i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2/>}
          </li>
          </div>
          <li>
            <Link to='create-issue'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Create
            </Link>
          </li>
        </ul>
        <Button/>
      </nav>
    </>
    
  );
}

export default Navbar;