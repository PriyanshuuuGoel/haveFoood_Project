


export default function DineItems({current}){
    return(
        <a  target="_blank"  href={current?.cta?.link}>
        <div  className=" relative w-90 h-90  flex-shrink-0 rounded-lg overflow-hidden shadow bg-white p-3 text-center m-3  transform transition-transform duration-500 hover:scale-110  text-center">
             {/* //!  */}
             <div>
               <img className="w-81 h-47 rounded-2xl ml-1.5" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+current?.info?.mediaFiles[0]?.url} ></img>
               
             </div>

             {/* //! */}
                <div className="absolute bottom-40 left-5 w-81 h-20 rounded-b-2xl"
       style={{
         background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
       }}
              />


             {/* //!  */}
             <div className="flex justify-between relative ">
                  <div className="relative bottom-7.5  left-5 text-white font-bold text-xl">
                       <p>{current?.info?.name}</p>
                  </div>

                  <div className="relative bottom-7.5 right-8 text-white flex items-center gap-1">
                       <i className="fa-solid fa-star"></i>
                       <p>{current?.info?.rating?.value}</p>
                  </div>
             </div>

             {/* //!  */}
             <div className="flex justify-between text-gray-400 ml-2 mr-2 ">
                <div>
                     <p>{current?.info?.cuisines}</p>
                </div>
                <div>
                    <p>{current?.info?.costForTwo}</p>
                </div>
             </div>

             {/* //!  */}
             <div  className="flex justify-between text-gray-400 pt-3 ml-2 mr-2 ">

                <div>
                   <p>{current.info.locationInfo.formattedAddress}</p>
               </div>

               <div>
                   <p>{current.info.locationInfo.distanceString}</p>
               </div>

             </div>


             {/* //! */}

             <div className="mt-5 ">
               <div className="">
                  <p className="bg-green-400 p-2  rounded-2xl text-white">{current?.info?.customerOffer.info.description}</p>
               </div>
             </div>

            
             
        </div>
        </a>
    )
}