import Cookies from 'js-cookie'
import { createContext, useState } from 'react'
import { CompanyInfo } from '../../setting/site-setting'
import { COMPANY_INFO } from '../../framework/util/constants'

export const CompanyInfoContext = createContext({
  companyInfo:
    Cookies.get(COMPANY_INFO) &&
    Cookies.get(COMPANY_INFO) != null &&
    Cookies.get(COMPANY_INFO) != undefined &&
    Cookies.get(COMPANY_INFO) != 'undefined'
      ? (JSON.parse(Cookies.get(COMPANY_INFO) || '') as CompanyInfo)
      : ({} as CompanyInfo),

  updateCompnyInfo: (data: CompanyInfo) => {},
})

const CompanyInfoProvider = ({ children }: any) => {
  const [companyInfo, setCompanyInfo] = useState(
    Cookies.get(COMPANY_INFO) &&
      Cookies.get(COMPANY_INFO) !== null &&
      Cookies.get(COMPANY_INFO) !== undefined &&
      Cookies.get(COMPANY_INFO) !== 'undefined'
      ? (JSON.parse(Cookies.get(COMPANY_INFO) || '') as CompanyInfo)
      : ({} as CompanyInfo),
  )
  const updateCompnyInfo = (value: CompanyInfo) => {
    Cookies.set(COMPANY_INFO, JSON.stringify(value))
    setCompanyInfo(value)
  }

  return (
    <CompanyInfoContext.Provider
      value={{
        companyInfo,
        updateCompnyInfo,
      }}
    >
      {children}
    </CompanyInfoContext.Provider>
  )
}

export default CompanyInfoProvider
