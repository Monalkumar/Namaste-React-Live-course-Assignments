import {IMG_CDN_URL} from "../config"

const RestaurentCard=({name,cuisines,locality,cloudinaryImageId})=>{
    
    return(
            <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
            <h5>{name}</h5>
            <h5>{cuisines}</h5>
            <h5>{locality}</h5>
           
            </div>

        )
    }
export default RestaurentCard;
   