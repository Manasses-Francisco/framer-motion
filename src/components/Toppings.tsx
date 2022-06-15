import React from "react";
import { Link } from "react-router-dom";
import { PizzaProps } from "../App";
import {motion} from "framer-motion";

export interface ToppingsProps {
  addTopping: (topping: string) => void;
  pizza: PizzaProps;
}

export function Toppings({ addTopping, pizza }: ToppingsProps) {
  const toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";

          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>
      <motion.div
        initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{type:'spring',stiffness:120}}
      >
        <Link to="/order">
          <motion.button
            whileHover={{
              scale:1.1,
              textShadow:"0px 0px 8px rgb(255,255,255)",
              boxShadow:"0px 0px 8px rgb(255,255,255)"
            }}
          >
            Order
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
