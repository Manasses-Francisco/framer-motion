import React from "react";
import {PizzaProps} from "../App";

export interface OrderProps{
    pizza:PizzaProps;
}

export function Order({pizza}:OrderProps){
    return (
        <div className="container order">
            <h2>Thank you for order :)</h2>
            <p>You ordered a {pizza.base} pizza with:</p>
            {pizza.toppings.map(topping=> <div key={topping}>{topping}</div>)}
        </div>
    )
}