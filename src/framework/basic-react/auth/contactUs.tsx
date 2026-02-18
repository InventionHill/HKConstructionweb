import { useMutation } from 'react-query'
import { API_ENDPOINTS } from '../../util/api-endpoint'
import http from '../../util/http'

interface ContactFormData {
  full_name: string
  email: string
  phonecode: string
  phone: string
  subject: string
  message: string
}

async function contactUs(input: ContactFormData) {
  return http.post(API_ENDPOINTS.CONTACT_US, input)
}

export const useContactUs = () => {
  return useMutation((input: ContactFormData) => contactUs(input))
}
