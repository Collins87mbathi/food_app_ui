import React from 'react'
import Menu from '../Menu/Menu';
import Filter from '../Filter/Filter';
import './Products.scss';
// import data from './data';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from '../Utils/constants'



const Products = () => {

    const [mainData, setMainData] = useState([]);
const [menuitems, setMenuitems] = useState(mainData);

useEffect(() => {
  
  const getProducts = async () => {
   const res = await axios.get(BASE_URL + '/products/all');
 
   setMainData(res.data.items);
  }
  getProducts();
},[]);
  
const allCategories = ['all', ...new Set(mainData.map((main)=> main.category))]

console.log(allCategories);
const filterItems = (category) => {
    if (category === 'all') {
        setMenuitems(mainData);
       
        return;
    }
    const newItems = mainData.filter((main) => main.category === category);
    setMenuitems(newItems);
    
}

  return (
    <main>
        <section className='menu section'>
            <div className='title'>
                <h2>our Foods</h2>
              <div className="underline"></div>
            </div>
        <Filter categories= {allCategories} filterItems={filterItems}/> 
         <Menu  menuitems={menuitems}/>
        </section>
    </main>
  )
}

export default Products