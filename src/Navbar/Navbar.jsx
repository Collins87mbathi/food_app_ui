import React,{useRef} from 'react'
import './Navbar.scss';
import logo from './logo.png';
import {FaTimes,FaBars} from 'react-icons/fa';
import IconButton from "@material-ui/core/IconButton";
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector,useDispatch} from 'react-redux';
import  {logout} from '../Redux/Slices/userSlice';
// import {FiLogOut} from 'react-icons/fi';

const Header = () => {
 const navRef = useRef(null);
const user = useSelector((state)=> state.user.user);
const cart = useSelector((state)=>state.cart.products);
const dispatch = useDispatch();
 const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav")
 };

console.log(cart.length);
  return (
   <header>
    
        <img src={logo} className='logo' alt='logo' />

        <nav  ref={navRef}>
            <a href='/'>Home</a>
            <a href='/'>Foods</a>
            <span className='logout' onClick={(e) => {
                dispatch(logout());
              }}>Logout</span>
            <a href='/cart'>
                  <IconButton aria-label="cart">
                  <Badge overlap="rectangular" badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                  </Badge>
                  </IconButton>
                </a>
                <span> {user.name}</span>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
        
   </header>
  )
}

export default Header