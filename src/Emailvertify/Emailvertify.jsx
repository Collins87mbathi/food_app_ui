import React from 'react'
import './Emailvertify.scss';
import {Link,useParams} from 'react-router-dom';
import {BASE_URL} from '../Utils/constants';
import success from './check.png';
import { useEffect} from 'react';
import axios from 'axios';

const Emailvertify = () => {
  const param = useParams();


    useEffect(() => {
          const activationEmail = async () => {
              try {
                  const res = await axios.get(BASE_URL +`/user/${param.id}/verify/${param.token}`);
                  console.log(res.data);
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

  <h3>The email is successfully vertified</h3>
  <Link to='/login'>
  <button className='success-button'>Login</button>	
  </Link>
  </div>		
</>
  )
}

export default Emailvertify ;