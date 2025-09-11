import { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addItems,incrementItems,decrementItems } from "../src/utils/Slice";

export default function CurrentResMenuItems({items}){
  
  const dispatch = useDispatch();
  const element = useSelector((state)=> state.slice1.current); // Yaha Array agya 

  const currentElement = element.find((current)=> items.card.info.id == current.id );
  const count =  currentElement ? currentElement.quantity : 0; 

 //! Add
  function add(){
       dispatch( addItems(items));
  }

  //! Increment
  function increment(){
       dispatch(incrementItems(items));
  }

  //! Decrement
  function decrement(){
    dispatch(decrementItems(items));
  }


    return(

        <>
        <div className="flex justify-evenly">
    
            {/* //! data */}
           <div  className="w-[70%]" >

              <div className="px-1" >
                <p>{ ('isVeg' in items.card.info?   <span className="w-4 h-4 rounded-sm border-2 border-green-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                </span> : <span className="w-4 h-4 rounded-sm border-2 border-red-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                </span>) }</p>
              </div>


              <div>
                <p className="font-bold text-gray-700 text-lg px-1" >{items.card.info.name}</p>
              </div>
             
              <div className="flex items-center mt-1" >
                  <div>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <div>
                      <p className="pb-0.5" >{(items.card.info.price / 100).toFixed(0)}</p>
                  </div>
              </div>

              <div className="flex items-center mt-1" >
                   <svg className="w-7 h-7 fill-current text-green-500" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 
                                          3.95 4.146.018c.958.004 1.355 1.226.584 
                                          1.818l-3.36 2.455 1.287 3.951c.3.922-.756 
                                          1.688-1.541 1.125L10 13.011l-3.353 2.333c-.785 .563-1.841-.203-1.541 -1.125l1.287 -3.951-3.36 -2.455c-.77-.592-.374-1.814 .584 -1.818l4.146 -.018 1.286 -3.95z" />
                    </svg>
                   <p className="pb-1">{items.card.info.ratings.aggregatedRating.rating}</p>
              </div>


              <div className="overflow-hidden" >
                 <p className=" pl-1  text-gray-400 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] " >{items.card.info.description}</p>
              </div>
           </div>

           {/* //! images */}
           <div className="w-[20%] relative " >
               <img  className="w-38 h-36 rounded-2xl object-cover shadow-2xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+items.card.info.imageId} ></img>
              

                  {/* //* Button  */}
                {
                  (count == 0) ?  (<button onClick={()=> add()} className="border border-white h-10 w-24 rounded-2xl absolute  top-30 left-7  text-green-500 bg-white cursor-pointer shadow-lg" >ADD</button>) : 
                     (<div className="flex justify-evenly items-center border border-white h-10 w-24 rounded-2xl absolute  top-30 left-7  text-green-500 bg-white cursor-pointer shadow-lg">
                      <button onClick={()=> decrement()} className="pt-1" >
                                                        <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>

                      </button>

                      <p className="text-xl" >
                        {count}
                      </p>

                      <button onClick={()=> increment()} className="pt-1" >
                                                                                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                      </button>
                     </div>
                  )
                }
           </div>
           
        </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300" />

       </>   
    )
}