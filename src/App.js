import React from 'react'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home/Home'
import Signin from './Signin/Signin'
import Signup from './Signup/Signup'
import Emailvertify from './Emailvertify/Emailvertify';
import ProtectedRoute from './Utils/ProtectedRoute';


const App = () => {
  return (
    <>
  
    <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
             <Home/>
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Signin/>} />
        <Route path="/register" element={<Signup/>}/>
        <Route path="/users/:id/verify/:token" element={<Emailvertify/>}/>
      </Routes>
    </Router> 
    </>
  )
}

export default App