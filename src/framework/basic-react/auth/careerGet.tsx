import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function career() {
  const { data } = await http.get(API_ENDPOINTS.GET_CAREER_LIST)
  return data
}

export const useCareer = () => {
  return useQuery<{ data: any[] }, Error>(
    [API_ENDPOINTS.GET_CAREER_LIST],
    career,
  )
}
