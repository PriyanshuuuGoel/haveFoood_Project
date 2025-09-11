import { useEffect , useState} from "react";
import { useParams } from "react-router";
import CurrentResMenu from "./CurrentResMenu";
import Shimmer1 from "./Shimmer1";


export default function CurrentRes(){
    
    const {id}  = useParams();
    const[selected , setSelected] = useState(null);


    const [data , setData] = useState([]);
    const [restaurantName , setResName] = useState("");


    useEffect(()=>{
        async function fetchData(){
             const proxyServer = "https://cors-anywhere.herokuapp.com/";
             const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`

             const response = await fetch(proxyServer+swiggyAPI);
             const result =  await response.json();

             const currentData = result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
             const filterData = currentData.filter((items)=> 'title' in items?.card?.card);

             const resName = result.data.cards[0].card.card.text;
             setResName(resName);

             setData(filterData);
        }

        fetchData();

    },[])


    console.log(data);

    if ( data.length == 0 ){
        return(
            <>
              <Shimmer1></Shimmer1>
            </>
        )
    }


    function Vegetarians(){
        if(selected == "veg"){
            setSelected(null);
        }
        else{
            setSelected("veg");
        }
    } 

    function NonVegetarians(){
          if(selected == "nonveg"){
            setSelected(null);
        }
        else{
            setSelected("nonveg");
        }
    }


    
    return(
        <div  className="mt-20  " >

           <div  className="flex mx-[20%] mb-10">
            <h1  className="text-4xl  font-extrabold">{restaurantName}</h1>
           </div>


           {/* //! Button div     */}
          <div className="flex mx-[20%] gap-3" >
                            <button
                                onClick={() => Vegetarians()}
                                className={`flex  cursor-pointer items-center gap-2 px-4 py-2 rounded-full shadow-md transition-all duration-300 ${
                                            selected === "veg"
                                                ? "bg-green-100 border-2 border-green-600"
                                                : "bg-gray-100 border border-gray-300"
                                                }`}
                                        >
                                {/* Veg icon */}
                                <span className="w-4 h-4 rounded-sm border-2 border-green-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                </span>
                                <span
                                className={`font-semibold ${
                                    selected === "veg" ? "text-green-700" : "text-gray-600"
                                }`}
                                >
                                Veg
                                </span>
                            </button>




                            <button
                                onClick={() => NonVegetarians()}
                                className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full shadow-md transition-all duration-300 ${
                                selected === "nonveg"
                                    ? "bg-red-100 border-2 border-red-600"
                                    : "bg-gray-100 border border-gray-300"
                                }`}
                            >
                                {/* Non-Veg icon */}
                                <span className="w-4 h-4 rounded-sm border-2 border-red-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                </span>
                                <span
                                className={`font-semibold ${
                                    selected === "nonveg" ? "text-red-700" : "text-gray-600"
                                }`}
                                >
                                Non-Veg
                                </span>
                            </button>
          </div>




              {
                data.map((current)=> <CurrentResMenu key={current?.card?.card?.title} current={current?.card?.card}  foodSelected={selected} ></CurrentResMenu>)
              }
        </div>
    )
}