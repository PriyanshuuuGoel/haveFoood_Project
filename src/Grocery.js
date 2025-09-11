import GroceryInfo from "../utils/GroceryInfo";
import GroceryItems from "./GroceryItems";



export default function Grocery(){
    return (
         <div   className="mt-20 w-[80%] container mx-auto bg-white">
            <h3  className="text-2xl font-bold">Shop groceries on Instamart</h3>
        <div  className=" container mx-auto flex mt-10 gap-3 overflow-x-auto pb-2  bg-white "> 
         
           {
            GroceryInfo.map((current)=> <GroceryItems  key={current.id}  current={current} ></GroceryItems>)
           }
        </div>
        </div>
    )
}


// text-white font-bold  relative left-4 bottom-7.5 text-xl