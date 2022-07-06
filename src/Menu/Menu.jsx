import React from 'react';
import {FaCartPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import './Menu.scss';

const Menu = ({menuitems}) => {

  return (
    <div className="section-center">
      {menuitems.map((menuitem)=> {
        return (
        <article key={menuitem._id} className="menu-item">
           <div className="menu-hover">
           <img src={menuitem.image.url} alt={menuitem.title} className='photo' />
         <Link to = {`/products/${menuitem._id}`}>
          <button  className="cart-link">
          <FaCartPlus/>
          </button>
          </Link>
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