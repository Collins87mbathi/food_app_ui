import React from 'react'
import './Emailvertify.scss';
import {Link,useParams} from 'react-router-dom';
import {BASE_URL} from '../Utils/constants';
import success from './check.png';
import { useEffect,useState} from 'react';
import axios from 'axios';

const Emailvertify = () => {
  const param = useParams();
   const [msg, setMsg] = useState('');

    useEffect(() => {
          const activationEmail = async () => {
              try {
                  const res = await axios.get(BASE_URL +`/user/${param.id}/verify/${param.token}`);
                  console.log(res.data);
                   setMsg(res.message);
              } catch (err) {
               console.log(err);
              }
          }
          activationEmail();
  },[param]);

  return (
    <>
    <div className="container-success">
   <img src={success} alt="success_img" className='success-img' />

  <h3>{msg}</h3>
  <Link to='/login'>
  <button className='success-button'>Login</button>	
  </Link>
  </div>		
</>
  )
}

export default Emailvertify ;