import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{

    const [restaurantMenu, setRestaurantMenu]=useState(null)
    const {resid}= useParams()


useEffect(()=>{
getRestuarantInfo()
}, [])


async function getRestuarantInfo(){
const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" + resid)
const json = await data.json();
console.log(json.data)
setRestaurantMenu(json.data)
}
    return (!restaurantMenu) ? <Shimmer/> :(
        <div className="menu">
        <div>
        <img src= {IMG_CDN_URL+restaurantMenu.cloudinaryImageId}/>
        <h1>{restaurantMenu.city}</h1>
        <h1>{restaurantMenu.avgRating}</h1>
        <h1>{restaurantMenu.area}</h1>
        <h1>{restaurantMenu.areaPostalCode}</h1>


        </div>

        <div>
        
        <h1>Menu</h1>
        <ul>
        
    {Object.values(restaurantMenu?.menu?.items).map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
        
        </ul>
        </div>
        </div>
    )
}


export default RestaurantMenu;