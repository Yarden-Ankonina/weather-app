import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query';

import { fetchAutoCompleteCities } from '../utils/weatherService';
import SearchLocation from './searchLocation'


export default function SearchLocationContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const queryClient = useQueryClient();
  const {data,status} = useQuery(["inputQuery",searchQuery] , fetchAutoCompleteCities)
  if
  (status === "loading"){
    console.log(<div>loading</div>)
  }
  else if(status === "error"){
    console.log(<div>error</div>)
  }
  else{
    console.log(status)
    if(data){
      console.log(data);
    }
  }
  


  return (
    <>
    <div className='flex flex-col h-1/2'>
      <SearchLocation setSearchQuery={setSearchQuery} value={searchQuery}/>
      {data ?
        <div className="flex flex-col h-full">
        <div>{searchQuery}</div>
          {
            data.map((city)=>(
              <div className="bg-slate-50 border solid border-slate-700">
                <span >{city.LocalizedName}</span>, {city.Country.LocalizedName}
              </div>
            ))
          }
        </div>
      :<></>
      }
    </div>
    </>
  )
}
