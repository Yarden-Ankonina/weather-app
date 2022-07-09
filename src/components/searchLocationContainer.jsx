import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query';

import { fetchAutoCompleteCities } from '../utils/weatherService';
import SearchLocation from './searchLocation'
import SearchOptions from './searchOptions';


export default function SearchLocationContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const queryClient = useQueryClient();
  const {data,status} = useQuery(["inputQuery",searchQuery] , fetchAutoCompleteCities)
  let showSearchOptions = false;
  console.log(status)
  if(status === 'success'){
    showSearchOptions = true;
  }

  return (
    <>
    <div className='flex flex-col w-full justify-center items-center'>
      <SearchLocation setSearchQuery={setSearchQuery} value={searchQuery}/>
      <SearchOptions data={data} showSearchOptions={showSearchOptions}/>
    </div>
    </>
  )
}
