import { Outlet } from "react-router";
import RestaurantHeader from "./RestaurantHeader";


export default function SecondHome(){
    return(
        <>
          <RestaurantHeader></RestaurantHeader>
          <Outlet></Outlet>
        </>
    )
}