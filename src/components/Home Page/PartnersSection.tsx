/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { usePartnerSection } from '../../framework/basic-react/auth/partnersectionGet'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'

const PartnersSection: any = () => {
  const imageUrl = process.env.NEXT_PUBLIC_IMG_ENDPOINT
  const { companyInfo } = useContext(CompanyInfoContext)

  const [partner, setpartner] = useState<any>()
  const { data: partnerData, isSuccess: partnerDataSuccess } =
    usePartnerSection()

  useEffect(() => {
    if (partnerDataSuccess) {
      setpartner(partnerData?.data?.result)
    }
  }, [partnerDataSuccess, partnerData?.data?.result])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#EFEFF1] w-full md:min-h-[360px] my-10">
        <div className="w-full md:h-360 mt-4 mb-4">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-[250px] md:bg-white md:shadow-md p-10 md:rounded-r-full text-center items-center justify-center">
              <img
                src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
                className="w-12 h-12 mx-auto mb-4"
                alt="Mini logo"
              />
              <div className="text-base font-medium text-primaryColor mb-2">
                OUR Partners
              </div>
              <div className="text-4xl font-medium mb-2">
                Group of Companies
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {partner?.map((item: any) => (
            <div
              key={item?.id}
              className="bg-white rounded-lg h-[150px] p-5 m-2 grid-4"
            >
              <img
                src={imageUrl + item?.image_path}
                className="w-full h-[70px]"
                alt="Mini Logo"
              />
              <div className="mt-2 text-center text-black">{item?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PartnersSection
