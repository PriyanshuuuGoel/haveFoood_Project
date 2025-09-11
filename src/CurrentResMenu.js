import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CurrentResMenuItems from "./CurrentResMenuItems"


export default function CurrentResMenu({current, foodSelected}){


    const [isOpen , setIsOpen] = useState(true);


   //!  Case when data is more nested ( here it is present in categories ) 
    if ( 'categories' in current ){
       return(
        <div className="mt-5">
               <h4  className="text-2xl font-bold mx-76 mb-5 ">{current?.title}</h4>

               {
                current?.categories?.map((items)=> <CurrentResMenu key={items?.title} current={items} foodSelected={foodSelected} ></CurrentResMenu>)
               }
        </div>
       )
    }

    //! Dropdown Case is handled 
   if ( !isOpen){
      return(
        <div  className="max-w-[60%]  container mx-auto mt-5">
           <div className="flex justify-between mt-5 mb-1" >
               <h4  className="text-2xl font-bold mb-5">{current.title}</h4>
                <button onClick={()=> setIsOpen(!isOpen)} >
                   {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
           </div>
           <p className="h-2 bg-gray-200" ></p>
        </div>
      )
   }


   //! foodSelected for Vegetarians 

   if ( foodSelected === "veg"){
      return(
          <div className="max-w-[60%]  container mx-auto mt-5 " >
         
         <div className="flex justify-between mt-5 mb-1" >
           <h4  className="text-2xl font-bold mb-5">{current.title}</h4>
           <button onClick={()=> setIsOpen(!isOpen)} >
                   {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
         </div> 

           <div className=" " >
              {     // filtering data
                current?.itemCards?.filter((temp)=> 'isVeg' in temp.card.info ).map((items)=> <CurrentResMenuItems key={items?.card?.info?.id}  items={items} ></CurrentResMenuItems>)
              }
           </div>

         <p className="h-2 bg-gray-200" ></p>
        </div>
      )
   }




   
   //! foodSelected for Non-Vegetarians 

   if ( foodSelected === "nonveg"){
      return(
          <div className="max-w-[60%]  container mx-auto mt-5 " >
         
         <div className="flex justify-between mt-5 mb-1" >
           <h4  className="text-2xl font-bold mb-5">{current.title}</h4>
           <button onClick={()=> setIsOpen(!isOpen)} >
                   {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
         </div> 

           <div className=" " >
              {      // filtering Data
                current?.itemCards?.filter((temp)=> !('isVeg' in temp.card.info) ).map((items)=> <CurrentResMenuItems key={items?.card?.info?.id}  items={items} ></CurrentResMenuItems>)
              }
           </div>

         <p className="h-2 bg-gray-200" ></p>
        </div>
      )
   }




    return (
      
        <div className="max-w-[60%]  container mx-auto mt-5 " >
         
         <div className="flex justify-between mt-5 mb-1" >
           <h4  className="text-2xl font-bold mb-5">{current.title}</h4>
           <button onClick={()=> setIsOpen(!isOpen)} >
                   {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
         </div> 

           <div className=" " >
              {
                current?.itemCards?.map((items)=> <CurrentResMenuItems key={items?.card?.info?.id}  items={items} ></CurrentResMenuItems>)
              }
           </div>

         <p className="h-2 bg-gray-200" ></p>
        </div>
    )
}