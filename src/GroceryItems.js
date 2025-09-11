


export default function GroceryItems({current}){
    return (
        <div className="flex-shrink-0 rounded-lg overflow-hidden shadow bg-white p-3 text-center m-2    transform transition-transform duration-500 hover:scale-110 ">
             <a  href={current?.action?.link} >
                <img  className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+ current?.imageId} ></img>
                 
             </a>
             <p>{current?.action?.text}</p>
        </div>
    )
}