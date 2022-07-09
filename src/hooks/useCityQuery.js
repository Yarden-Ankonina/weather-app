import {useQuery} from 'react-query'
import { mockFetchCityByLocationKey } from '../utils/mockServerJsonService';

export const useCityQuery = (key)=>{
    const {data, status} = useQuery(["cities", key], mockFetchCityByLocationKey)
    return {data, status};
  }