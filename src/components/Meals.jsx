import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";

function Meals(){

    const [loadmeals,setloadmeals]=useState([]);

    useEffect(()=>{
        async function  FetachMeals()
        {
            const response=await fetch("https://localhost:3000/meals");
    
            if(!response.ok){
    
            }
            const Meals=response.json();
            setloadmeals(Meals);
        }
        FetachMeals();

    },[])
    return(
        <ul id="meals">{loadmeals.map((meal)=>
            <MealItem key={meal.id} meal={meal}/>)}</ul>
    )
}

export default Meals;

// <ul id="meals">{loadmeals.map((meals)=><li key={meals.id}>{meals.name}</li>)}</ul>