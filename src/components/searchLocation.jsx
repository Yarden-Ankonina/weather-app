import React from 'react'

import { useQueryClient } from 'react-query';


export default function SearchLocation({searchQuery, setSearchQuery}) {
  const queryClient = useQueryClient();

  const onChange = (e)=>{
    setSearchQuery(e.target.value);
  }

  
  return (
    <>
    <div className='mt-2 flex flex-row'>
        <input className='w-64 p-0.5 pl-2 bg-sky-50 dark:bg-zinc-800 border border-solid border-slate-800 dark:border-slate-500 dark:border-2 rounded dark:text-zinc-300'  type="text" placeholder='&#128269; Search For Location' onChange={onChange} value={searchQuery}/>
    </div>
    </>
  )
}
