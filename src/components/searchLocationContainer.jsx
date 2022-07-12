import React, { useState } from "react";
import { useQuery } from "react-query";

import { getCitiesByQuery } from "../utils/getCitiesByQuery";
import SearchOptions from "./searchOptions";

export default function SearchLocationContainer() {
  const [searchQuery, SetSearchQuery] = useState("");
  const { data: cities } = useQuery(
    ["citiesByQuery", searchQuery],
    getCitiesByQuery
  );
  const [showSerchOptions, SetshowSerchOptions] = useState(false);

  const onInputCapture = (e) => {
    if (e.target.value) {
      SetSearchQuery(e.target.value);
      SetshowSerchOptions(true);
    } else {
      SetshowSerchOptions(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="mt-2 flex flex-row ">
          <input
            onInputCapture={onInputCapture}
            className="w-64 p-0.5 pl-2 bg-sky-50 dark:bg-zinc-800 border border-solid border-slate-800 dark:border-slate-500 dark:border-2 rounded dark:text-zinc-300"
            type="text"
            placeholder="&#128269; Search For Location"
          />
        </div>
        {cities && Object.keys(cities).length > 0 ? (
          <SearchOptions
            data={cities}
            showSerchOptions={showSerchOptions}
            SetshowSerchOptions={SetshowSerchOptions}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
