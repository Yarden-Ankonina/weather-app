import {useQuery} from 'react-query';
import { mockFetchCurrentWeather } from '../utils/mockServerJsonService';

export const useCurrentConditionQuery = (key)=>{
    const {data, status} = useQuery(["weather", key], mockFetchCurrentWeather)
    return {data, status};
  }    