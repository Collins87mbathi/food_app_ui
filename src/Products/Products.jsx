import React from 'react'
import Menu from '../Menu/Menu';
import Filter from '../Filter/Filter';
import './Products.scss';
import data from './data';
import { useState } from 'react';



const Products = () => {

    const [mainData, setMainData] = useState(data);
const [menuitems, setMenuitems] = useState(mainData);


const allCategories = ['all', ...new Set(mainData.map((main)=> main.category))]

const [categories,setCategories] = useState(allCategories);

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
        <Filter categories= {categories} filterItems={filterItems}/> 
         <Menu  menuitems={menuitems}/>
        </section>
    </main>
  )
}

export default Products