import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function partnerSection() {
  const { data } = await http.get(API_ENDPOINTS.GET_PARTNERDATA)
  return data
}

export const usePartnerSection = () => {
  return useQuery<{ data: any }, Error>(
    [API_ENDPOINTS.GET_PARTNERDATA],
    partnerSection,
  )
}
