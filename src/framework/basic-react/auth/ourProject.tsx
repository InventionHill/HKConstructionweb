import { useMutation } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function ourProjects(value:any) {
  let queryValue
  if(value === 0) {
    queryValue = '?'
  } else {
    queryValue = `?project_status=${value}` 
  }
 return await http.get(`${API_ENDPOINTS.OUR_PROJECT}${queryValue}`)
 
}

export const useOurProject = () => {
  return useMutation((value:any) => ourProjects(value))
}
