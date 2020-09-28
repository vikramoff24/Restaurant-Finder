//we us contextapi is for making the data from database availablr to all the components with using props or something.

import React,{useState , createContext} from "react";

export const RestaurantsContext =createContext();


export const RestaurantsContextProvider= props=>
{
    const[restaurants,setRestaurants]=useState([]);

    return(
        <RestaurantsContext.Provider value={{
            restaurants,setRestaurants //here we are actually passing key and pair
        }}>

   {props.children}
        </RestaurantsContext.Provider>
    );
};




