import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function ourBanner() {
  const { data } = await http.get(API_ENDPOINTS.GET_BANNER)
  return data.data
}

export const useourBanner = () => {
  return useQuery([API_ENDPOINTS.GET_BANNER], ourBanner)
}
