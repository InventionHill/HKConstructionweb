import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function ourPartner() {
  const { data } = await http.get(API_ENDPOINTS.GET_PARTNERS)
  return data.data
}

export const useOurPartner = () => {
  return useQuery([API_ENDPOINTS.GET_PARTNERS], ourPartner)
}
