import FoodInfo from "../utils/FoodInfo";
import FoodItems from "./FoodItems";


export default function FoodCart(){
    return (
        <div  className="flex max-w-[80%] flex-wrap p-5 container m-auto justify-center gap-5 mt-50 overflow-x-auto snap-x snap-mandatory scroll-smooth     ">
            { 
                 FoodInfo.map( (current)=> <FoodItems key={current.id} current={current} ></FoodItems>)
            }
        </div>
    )
}