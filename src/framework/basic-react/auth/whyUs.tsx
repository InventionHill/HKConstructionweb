import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function WhyUS() {
  const { data } = await http.get(API_ENDPOINTS.WHY_US)
  return data.data
}

export const useWhyUS = () => {
  return useQuery([API_ENDPOINTS.WHY_US], WhyUS)
}
