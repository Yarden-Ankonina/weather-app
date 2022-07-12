import fetchApi from "./fetchApi";
import { isDevMode } from "./settings";
import { isEnglishOnly } from "./wordUtil";

export const getCitiesByQuery = async ({ queryKey }) => {
  const [, query] = queryKey;
  const baseUrl = 
  isDevMode
    ? "http://localhost:3001"
    : "http://dataservice.accuweather.com";
  const autoCompleteEndPoint = `${baseUrl}/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${query}`;
  if (isEnglishOnly(query)) {
    return await fetchApi(autoCompleteEndPoint);
  }
};
