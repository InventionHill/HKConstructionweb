import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'
import { COMPANY_INFO } from '../../util/constants'
import Cookies from 'js-cookie'

async function fetchCompanyInfo() {
  const response = await http.get(API_ENDPOINTS.GET_ALL_COMPANY_INFO)
  return response.data.data
}

export const useCompanyInfo = () => {
  return useQuery([API_ENDPOINTS.GET_ALL_COMPANY_INFO], fetchCompanyInfo, {
    onSuccess: (data) => {
      Cookies.set(COMPANY_INFO, JSON.stringify(data))
    },
  })
}
