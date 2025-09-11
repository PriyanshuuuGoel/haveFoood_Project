import { useState , useEffect } from "react";
import RestCard from "./RestCard";
import Shimmer1 from "./Shimmer1";


export default function Restaurants(){
    
    const [Data , setData] = useState([]);
    
    useEffect(()=>{
        async function fetchData(){
                    const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
              const response = await fetch(proxyServer+swiggyAPI);
              const result = await response.json();
              setData(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData();
    } , [])


    if ( Data.length == 0 ){
      return <Shimmer1></Shimmer1>
    }
    
    
    console.log(Data);
    
    return (

        <>

         <div className="container max-w-[80%] mx-auto mt-10">

  {/* <!-- Heading --> */}
  <h1 className="font-extrabold text-3xl mb-8">
    Top Food Chains in Delhi
  </h1>

  {/* <!-- Cards Container --> */}
  <div className="flex flex-wrap gap-8 justify-center">
    {Data.map((current) => (
      <RestCard key={current.info.id} current={current} />
    ))}
  </div>

</div>

        </>
    )
}