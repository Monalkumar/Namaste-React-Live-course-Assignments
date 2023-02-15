import React from "react";
import { useState } from "react";
import { restaurenlist } from "../config";
import RestaurentCard from "./RestaurantCard";


function filterData(searchText,restaurants){
   const filterData = restaurants.filter((restaurant) =>  restaurant.data.data.name.includes(searchText)
   )
   return filterData;
}

const Body = () => {
    const [restaurants,setRestaurants]=useState(restaurenlist)
     const[searchText,setSearchText]=useState("")
  

return (
    <>
      <div className="container">
        <input type="text" className="search-input" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
       
      
       <button onClick={()=>{
        const data=filterData(searchText,restaurants);
        setRestaurants(data);
    }
}> 

       Search</button>
      </div>
      <div className="res-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurentCard
              {...restaurant.data.data}
              key={restaurant.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
