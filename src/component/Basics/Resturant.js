import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';

const Resturant = () => {
        const[menuData,setmenuData]=useState(Menu);

        const filteritem=(category)=>{
               const updatedlist=Menu.filter((curElem)=>{
                 return curElem.category===category;
               }

               );
               setmenuData(updatedlist);
              };

    return (
        <>
        <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' onClick={()=>filteritem("Lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={()=>filteritem("breakfast")}>breakfast</button>
          <button className='btn-group__item' onClick={()=>filteritem("evening")}>evening</button>
          <button className='btn-group__item' onClick={()=>filteritem("dinner")}>dinner</button>
          <button className='btn-group__item' onClick={()=>setmenuData(Menu)}>All</button>
        </div>


        </nav>
        <MenuCard menuData={menuData}/>
                
        
        </>
    );
};

export default Resturant;
