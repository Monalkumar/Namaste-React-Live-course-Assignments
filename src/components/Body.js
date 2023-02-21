import React, { useEffect } from "react";
import { useState } from "react";
import { restaurenlist } from "../config";
import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


function filterData(searchText,allRestaurants){
   const filterData = allRestaurants.filter((restaurant) =>  restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
   )
   return filterData;
}

const Body = () => {
    // const [restaurants,setRestaurants]=useState(restaurenlist)
const [allRestaurants, setAllRestaurants]=useState([])
    const [filteredRestaurants,setFilteredRestaurants]=useState([])
     const[searchText,setSearchText]=useState("")
  useEffect(()=>{
    getRestaurants();
  },[])
  console.log("render")

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
return (allRestaurants.length===0) ? <Shimmer/>:(
    <>
      <div className="container">
        <input type="text" className="search-input" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
       
      
       <button onClick={()=>{
        const data=filterData(searchText,allRestaurants);
        setFilteredRestaurants(data);
    }
}> 

       Search</button>
      </div>
      <div className="res-list">
        {filteredRestaurants.map((restaurant) => {
          return(
            <RestaurentCard
              {...restaurant.data}
              key={restaurant.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
