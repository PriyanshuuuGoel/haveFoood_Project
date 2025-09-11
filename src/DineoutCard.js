
import Dineout from "../utils/DineoutInfo";
import DineItems from "./DineItems";


export default function DineoutCard(){
    return (
        <div className="mt-30 w-[80%] container mx-auto bg-white">
           <h3  className="text-2xl font-bold" >Discover best restaurants on Dineout</h3>
               <div className="container mx-auto flex mt-7 gap-3 overflow-x-auto pb-2  bg-white" >
                   {
                    Dineout.map((current)=> <DineItems key={current.info.id}   current={current}  ></DineItems>)
                   }
               </div>


               

        </div>
    )
}