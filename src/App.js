import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




import ReactDOM from "react-dom/client";




   
// config driven ui







   
    const Footer=()=>{
        return(
            
            <h3>Footer</h3>
            
        )
    }

    
const AppLayout=()=>{
            return(
                <React.Fragment>
                <Header/>
                <Body/>
                <Footer/>
                
                </React.Fragment>
            )
        }
  


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
