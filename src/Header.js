import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router';


export default function Header(){
    return (
        <>
        <div className="bg-[#ff5200]  pb-2 ">
            {/* //! Swiggy Logo and Login Details */}
           <div className=" flex  justify-around  pt-8">
               <div>
                <img  className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
               </div>


               <div className="flex text-white justify-evenly gap-10 items-center">
                <a className="hover:cursor-pointer"    target="_blank"   href="https://www.swiggy.com/corporate/">Swiggy Corporates</a>
                <a  className="hover:cursor-pointer"  target="_blank"  href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                <a  className="border border-white h-15 w-40 p-2 text-center rounded-xl hover:cursor-pointer flex justify-center items-center">Get the App  <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i></a>
                <a  className="border bg-black h-10 p-2 rounded-xl w-25 text-center border-black hover:cursor-pointer">Sign in</a>
               </div>
           </div>

           {/* //! Side images  */}
         <div className='relative mt-2'>
              <img  className='w-60 h-110  max-w-[20%] absolute'  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png' ></img>
           <img  className='w-60 h-110 max-w-[20%]  absolute right-0 top-0'  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png' ></img>
         </div>

           {/* //! Heading paragraph */}
           <div className='flex justify-center max-w-[60%] mt-25 container mx-auto'>
              <h1 className='text-white font-bold text-5xl text-center'>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
           </div>


           {/* //! search Bar */}
          <div className="max-w-[60%] container mx-auto flex flex-col md:flex-row gap-4 mt-10 mb-10">

  <div className="relative flex-1">
    <i className="fa-solid fa-location-dot absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    <input 
      className="bg-white h-10 w-full pl-10 pr-4 rounded-xl"
      placeholder="Delhi, India"
    />
  </div>

  <div className="relative flex-1">
    <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    <input 
      className="bg-white h-10 w-full pl-10 pr-4 rounded-xl"
      placeholder="Search for restaurant, item or more"
    />
  </div>

</div>



           {/* //! Cards in Header */}

           <div  className='flex max-w-[80%]  container mx-auto'>
                <Link to="/Restaurants" >
                  <img  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png'  ></img>
                </Link>  
               <a  href='https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1'><img  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png'  ></img></a>
               <a  href='https://www.swiggy.com/dineout'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png' ></img></a>
           </div>
        </div>   
        </>
    )
}