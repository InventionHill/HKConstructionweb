import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function siteEnvironment() {
  const { data } = await http.get(API_ENDPOINTS.GET_SITE_ENVIRONMENT)
  return data
}

export const useSiteEnvironment = () => {
  return useQuery<{ data: any }, Error>(
    [API_ENDPOINTS.GET_SITE_ENVIRONMENT],
    siteEnvironment,
  )
}
