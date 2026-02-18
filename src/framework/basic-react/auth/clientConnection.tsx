import { useQuery } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function ClientConnection() {
  const { data } = await http.get(API_ENDPOINTS.CLIENT_CONNECTION)
  return data.data
}

export const useClientConnection = () => {
  return useQuery([API_ENDPOINTS.CLIENT_CONNECTION], ClientConnection)
}
