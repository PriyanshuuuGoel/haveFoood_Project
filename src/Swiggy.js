import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import FoodCart from "./FoodCart";
import Grocery from "./Grocery";
import DineoutCard from "./DineoutCard";
import {BrowserRouter , Routes , Route} from "react-router";
import Home from "./Home";
import Restaurants from "./Restaurants";
import CurrentRes from "./CurrentRes";
import SecondHome from "./SecondHome";
import { Provider } from "react-redux";
import stores from "./utils/Store";

function App(){
    return(
        <div className="font-semibold">


            <Provider store={stores} >
           <BrowserRouter>
           
                 <Routes>
                    <Route path="/"  element={<Home></Home>}  ></Route>


                    {/* //!  Creating child routes  */}
                    <Route    element={<SecondHome></SecondHome>} >
                        <Route path="/Restaurants"  element={<Restaurants></Restaurants>} ></Route>
                        <Route  path="/Restaurants/:id" element={<CurrentRes></CurrentRes>} ></Route>
                    </Route>


                      
                 </Routes>

           </BrowserRouter>
           </Provider> 

        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);