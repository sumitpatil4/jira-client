import React, { useState } from 'react';
import { MenuItemsYourWork } from './MenuItemsYourWork';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

 console.log("props" + props)
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick} 
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItemsYourWork.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      
    </>
  );
}

export default Dropdown;