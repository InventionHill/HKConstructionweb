import Cookies from 'js-cookie'

export const getToken = (): string => {
  if (typeof window === undefined) {
    return ''
  }
  return Cookies.get('auth_token') || ''
}
