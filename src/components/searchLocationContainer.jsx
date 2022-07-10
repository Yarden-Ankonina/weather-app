// import React, { useEffect, useState } from 'react'
// import { useQuery, useQueryClient } from 'react-query';
// import { mockFetchAutoCompleteCities } from '../utils/mockServerJsonService';

// import { fetchAutoCompleteCities } from '../utils/weatherService';
// import SearchLocation from './searchLocation'
// import SearchOptions from './searchOptions';


// export default function SearchLocationContainer() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showSearchOptions, setShowSearchOptions] = useState(true);


//   const queryClient = useQueryClient();
//   // const {data,status,isFetching, refetch } = useQuery(["inputQuery",searchQuery] , fetchAutoCompleteCities,{
//   const {data,status,isFetching, refetch } = useQuery(["inputQuery",searchQuery] , mockFetchAutoCompleteCities,{
//     manual:true,
//     enabled:false,
    
//   });

//   const onSearchClick = ()=>{
//     if(!isFetching){
//       refetch();
//     }
//     if(status === 'success'){
//       setShowSearchOptions(true);
//     }
//   }

//   return (
//     <>
//     <div className='flex flex-col w-full justify-center items-center'>
//       <SearchLocation setSearchQuery={setSearchQuery} value={searchQuery} onSearchClick={onSearchClick}/>
//       <SearchOptions data={data} showSearchOptions={showSearchOptions} setShowSearchOptions={setShowSearchOptions}/>
//     </div>
//     </>
//   )
// }

import React, { useState } from 'react'
import {useQuery} from 'react-query'

import SearchLocation from './searchLocation'
import { getCitiesByQuery } from '../utils/getCitiesByQuery';

export default function SearchLocationContainer() {
  const [searchQuery, SetSearchQuery] = useState("");
  const {data:cities, status} = useQuery(['citiesByQuery',searchQuery], getCitiesByQuery);
  console.log(cities)
  console.log(status)

  return (
    <>
        <div className='flex flex-col w-full justify-center items-center'>
          <SearchLocation />
          {/* <SearchOptions data={data} showSearchOptions={showSearchOptions} setShowSearchOptions={setShowSearchOptions}/> */}
        </div>
    </>
  )
}
