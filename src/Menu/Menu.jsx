import React from 'react';
import {FaCartPlus} from 'react-icons/fa';
import './Menu.scss';

const Menu = ({menuitems}) => {
  return (
    <div className="section-center">
      {menuitems.map((menuitem)=> {
        return (
        <article key={menuitem.id} className="menu-item">
           <div className="menu-hover">
           <img src={menuitem.img} alt={menuitem.title} className='photo' />
          <button className="cart-link">
          <FaCartPlus/>
          </button>
          
           </div>
        <div className='item-info'>
            <h4>{menuitem.title}</h4>
            <h4 className='price'> sh{menuitem.price}</h4>
        </div>
        </article>
        );
      })}
    </div>
 
  );

};

export default Menu