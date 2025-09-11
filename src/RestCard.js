import {Link} from "react-router";


export default function RestCard({current}){
    return (
       <Link to={"/Restaurants/"+current?.info?.id} >
       
           <div  className="w-76 h-85 relative  transform transition-transform  duration-500 hover:scale-90 ">
            {/* //! */}
           <div>
              <img  className="w-72 h-60 object-cover rounded-2xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+current.info.cloudinaryImageId} ></img>
              
           </div>

            {/* //! */}
              <div className="absolute bottom-25 left-0 w-72 h-20 rounded-b-2xl"
                  style={{
                       background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
                     }}
              />


            {/* //! */}
           <div className="flex gap-1 absolute top-50 left-3 text-2xl font-bold text-white ">
             <p>{current.info.aggregatedDiscountInfoV3.header}</p>
             <p>{current.info.aggregatedDiscountInfoV3.subHeader}</p>
           </div>

      
            {/* //! */}
           <div className="overflow-hidden" >
             <h4 className="text-2xl font-bold pl-2 mt-2 truncate " >{current.info.name}</h4>
           </div>

            {/* //! */}
           
           <div className="flex items-center pl-2 mt-1">
                <svg width="18" height="18" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                   {/* Green background circle */}
                      <circle cx="50" cy="50" r="50" fill="green" />

                    {/* White star, centered */}
                    <polygon points="50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40" fill="white" />
                </svg>
             <p className="pl-1" >{current?.info?.avgRating}</p>
             <p className="pl-5 text-lg" >{current?.info?.sla?.slaString}</p>
           </div>

           {/* //! */}
           <div className="pl-2 mt-1 text-gray-400 w-72 overflow-hidden">
  <p className="truncate">{current.info.cuisines.join(" ")}</p>
</div>
        </div>
       </Link>
    )
}