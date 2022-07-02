import React from 'react'
import { useState } from 'react';
import {setIsFetching, setLoginFailure, setLoginSuccess} from '../Redux/Slices/userSlice';
import {Link,Navigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {BASE_URL} from '../Utils/constants';
import axios from 'axios';
import './Signin.scss';

const Signin = () => {
const [msg , setMsg] = useState('');
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState(false);
const [userdata, setUserdata] = useState({
  email:"",
  password:"",
});
 const {user} = useSelector((state)=> state.user);
const dispatch = useDispatch();

const handleChange = (e) => {
  setUserdata((initial)=>{
 return {...initial, [e.target.name]: e.target.value};
});
};

const submitForm = async (e) => {
  e.preventDefault();
  dispatch(setIsFetching());
  setLoading(true);
  try {
    const res = await axios.post(BASE_URL + "/user/login", userdata);
    dispatch(setLoginSuccess(res.data));
    setMsg(res.data.msg);
    localStorage.setItem('firstLogin', true);

    setLoading(false);
  } catch (error) {
    dispatch(setLoginFailure());
    setErrors(error.msg);
  }

}

  return (
    <div className="signup">
      {user !== null && <Navigate to={"/"}/>}
    <h3>Welcome to perez foods, we are always ready to offer the best</h3>
 <div className="container">
    <div className="title">
    <h4>SIGN IN</h4>
    </div>
    <form onSubmit={(e)=>submitForm(e)}>  
<div className="inputs">

  <div className="input-type">
    <input type='email' name='email' placeholder='Email Address'required value={userdata.email} onChange={(e)=>handleChange(e)}/>
  </div>
  <div className="input-type">
    <input type='password' name='password' placeholder='password'required value={userdata.password} onChange={(e)=>handleChange(e)}/>
  </div>
</div>
{errors && <div className="error_msg">{errors}</div>}
{msg && <div className="success_msg">{msg}</div>}
<div className="button">
<button type='submit' disabled={loading ? true : false}> {loading ? "Loading..." : "Sign in "}</button>
</div>
 </form>

  </div>
  <span>Don't  have an account ? <Link to='/register'>sign up</Link></span>
    </div>
  )
}

export default Signin