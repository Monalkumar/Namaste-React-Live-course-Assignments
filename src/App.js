import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";





   
// config driven ui







   
    // const Footer=()=>{
    //     return(
            
    //         <h3>Footer</h3>
            
    //     )
    // }

//before using routing
// const AppLayout=()=>{
//             return(
                // <React.Fragment>
                // <Header/>
                // <Body/>
                // <Footer/>
                
                // </React.Fragment>
            
//         }
  


// const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)

// After using routing configuration we have




const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
                
        </>
    )
};

const appRouter= createBrowserRouter([
    {
path: "/",
element: <AppLayout/>,
children:[ 


   {
    path:"/",
    element:<Body/>

}, 
    
{
    path:"/about",
    element:<About/>
},
{
    path:"/contact",
    element:<Contact/>
},


{
    path:"/restaurant/:resid",
    element:<RestaurantMenu/>
}

]

    },
   
])

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)