import React from 'react'
import './Header.scss';
import {useSelector} from 'react-redux'

const Header = () => {
 const user = useSelector((state)=>state.user.user);

  return (
    <div className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <h6>welcome {user.name} to Perez foods</h6>
          <h4>Let's solve hunger together with monthly Offer</h4>
          <h1>ORGANIC PASTA & SAUCE</h1>
          <a href="/" className="btn hero-btn">Order Now</a>
        </article>
        <article className="hero-img">
          <img src="https://freepngimg.com/thumb/burger/5-2-burger-png-thumb.png" class="hero-photo" alt="food" />
        </article>
      </div>
    </div>
  )
}

export default Header