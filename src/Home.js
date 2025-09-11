import Header from "./Header";
import FoodCart from "./FoodCart";
import Grocery from "./Grocery";
import DineoutCard from "./DineoutCard";




export default function Home(){
    return (
        <>
           <Header></Header>
           <FoodCart></FoodCart>
           <Grocery></Grocery>
           <DineoutCard></DineoutCard>
              <img   className="mt-30" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
        </>
    )
}