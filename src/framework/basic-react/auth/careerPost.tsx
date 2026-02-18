import { useMutation } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

async function fetchCareer(input: any) {
  try {
    const response = await http.post(API_ENDPOINTS.POST_CAREER, input, {
      headers: {
        'Content-Type':
          'multipart/form-data; boundary=<calculated when request is sent>',
      },
    })
    return response.data
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw error.response.data
    } else {
      throw error
    }
  }
}

/**
 * Custom hook to handle booking an appointment mutation.
 * @returns {Object} Mutation object with additional hooks for handling success and error cases.
 */
export const useCareerPost = () => {
  return useMutation((input) => fetchCareer(input))
}
