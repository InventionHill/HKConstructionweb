import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function CounterInfo() {
  const { data } = await http.get(API_ENDPOINTS.COUNTER_INFO)
  return data.data
}

export const useCounterInfo = () => {
  return useQuery([API_ENDPOINTS.COUNTER_INFO], CounterInfo)
}
