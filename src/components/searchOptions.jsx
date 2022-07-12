import { useContext} from "react";
import { WeatherAppContext } from "../contexts/weatherAppContext";
import { getKeyFromGeoLocation } from "../utils/getKeyFromGeoLocation";

export default function SearchOptions({data, showSerchOptions, SetshowSerchOptions}) {
  const {SetLocationKey} = useContext(WeatherAppContext)

  const onClick= (e)=> {
      SetshowSerchOptions(false);
      SetLocationKey(e.target.id);
      e.target.value = "";
    }
  const onClickGeo =async (e)=>{
    const city = await getKeyFromGeoLocation();
    SetshowSerchOptions(false);
    SetLocationKey(city.Key);
    e.target.value = "";
  }

  return (
    <>
    {data && showSerchOptions?
        <div className="flex flex-col h-full absolute z-10 top-10 rounded">
          <button onClick={onClickGeo} className="bg-slate-50 border-b solid border-slate-700/20 px-10 py-1 dark:bg-zinc-300 dark:border-slate-500/40 hover:dark:bg-slate-200 hover:bg-slate-200 " >
            <div className='flex justify-center items-center '>
              <img alt="location" className='w-5 h-5 mr-2 ' src="https://img.icons8.com/color/344/marker--v1.png"/>
              <span className='text-slate-500'>Use Current Location</span>
            </div>
          </button>
          {
            data.map((city, idx)=>(
              <button data-city={city} id={city.Key} key={idx} onClick={onClick} className="bg-slate-50 border solid border-slate-700/20 px-10 py-1 dark:bg-zinc-300 dark:border-slate-300/20 hover:dark:bg-slate-200 hover:bg-slate-200">
                {city.LocalizedName}, {city.Country.LocalizedName}
              </button>
            ))
          }
        </div>
        :<></>}
    </>
  )
}
