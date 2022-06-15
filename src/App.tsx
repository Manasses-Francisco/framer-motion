import React,{useState } from 'react'
import {Routes, Route} from "react-router-dom";
import {Base} from "./components/Base";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Toppings} from "./components/Toppings";
import {Order} from "./components/Order";

import "./index.css";

export interface PizzaProps{
  base:string;
  toppings:string[];
}

function App() {
  
  const [pizza,setPizza]=useState<PizzaProps>({base:"",toppings:[]});

  const addBase=(base:string)=>{
    setPizza({...pizza,base});
  }

  const addTopping=(topping:string)=>{
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings=[...pizza.toppings,topping]
    }else {
      newToppings=pizza.toppings.filter(item=>item !== topping);
    }
    setPizza({...pizza,toppings:newToppings});
  }

  return (
    <>
        <Header/>
        <Routes>
          <Route path="/base" element={<Base pizza={pizza} addBase={addBase} />}/>
          <Route path="/toppings" element={<Toppings pizza={pizza} addTopping={addTopping}/>}/>
          <Route path="/order" element={<Order pizza={pizza}/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </>
  )
}

export default App
