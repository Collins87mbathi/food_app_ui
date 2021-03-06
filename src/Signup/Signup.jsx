
import React,{useState} from 'react';
import './Signup.scss';
import {useDispatch} from 'react-redux';
import {setIsFetching,setRegisterSuccess,setLoginFailure} from '../Redux/Slices/userSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from '../Utils/constants';
import { toast,ToastContainer } from "react-toastify";
//import { Navigate } from 'react-router-dom';


const Signup = () => {
const dispatch = useDispatch();
//  const {state} = useSelector((state)=> state.user)
 const [userdata, setUserdata] = useState({
name:"",
email:"",
password:"",
});
const [loading, setLoading] = useState(false);
const [msg, setMsg] = useState('');
const [errors, setErrors] = useState(false);

  const handleChange = (e) => {
    setUserdata((initial) => {
      return { ...initial, [e.target.name]: e.target.value };
    });
};

const SubmitForm = async(e) => {
 e.preventDefault();
 dispatch(setIsFetching());
 setLoading(true);
 try {
  const res = await axios.post(BASE_URL + "/user/register", userdata);
  dispatch(setRegisterSuccess(res.data));
  setLoading(false);
  setMsg(res.data.msg);
 } catch (error) {
  dispatch(setLoginFailure());
  setErrors(error.response.data.msg);
  setLoading(false);
 }
 await errors &&  toast.error(errors, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  },[]);


  await msg &&  toast.success(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    },[]);


}


  return (
    <div className="signup">
      {/* {user !== null && <Navigate to={"/"} />} */}
    <h3>Welcome to perez foods, we are always ready to offer the best</h3>
    
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
 <div className="container">
    <div className="title">
    <h4 className='title-up'>SIGN UP</h4>
    </div>
    <form onSubmit={(e)=>SubmitForm(e)}> 
<div className="inputs">
  <div className="input-type user">
    <input type='name' name='name' placeholder='Name' required  value={userdata.name} onChange={(e)=>handleChange(e)}/>
  </div>
  <div className="input-type">
    <input type='email' name='email' placeholder='Email Address' required value={userdata.email}
                onChange={(e) => handleChange(e)}/>
  </div>
  <div className="input-type">
    <input type='password' name='password' placeholder='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required value={userdata.password} onChange={(e)=>handleChange(e)}/>
  </div>
</div>
{/* {errors && <div className="error_msg">{errors}</div>}
{msg && <div className="success_msg">{msg}</div>} */}
<div className="button">
<button type='submit'  disabled={loading ? true : false}> {loading ? "Loading..." : "Sign up"}</button>
</div>
 </form>

  </div>
  <span className='asking'>Do you have an account ? <Link to='/login'>sign in</Link></span>
    </div>
 
  )
}

export default Signup

