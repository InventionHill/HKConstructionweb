/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import MainButton from '../Buttons/ButtonEffects'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'

interface HomeAboutType {
  AboutData?: any
}

const AboutCompanySection = (props: HomeAboutType) => {
  const { companyInfo } = useContext(CompanyInfoContext)

  return (
    <div className="mx-6 md:mx-10 lg:mx-16 xl:mx-24 anybody bg-cover bg-[url('/images/HomePage/Section2Bg.png')]">
      {props.AboutData?.map((item: any, i: any) => (
        <div
          className="grid justify-between h-full grid-cols-1 py-4 md:grid-cols-2"
          key={i}
        >
          <div className="w-full space-y-4 md:w-3/4">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
              className="w-12 h-12"
              alt="Mini Logo"
            />
            <div className="space-y-6 text-base font-medium text-primaryColor">
              {companyInfo?.welcome_text}
            </div>
            <div className="space-y-6">
              <div className="text-5xl font-medium ">{item.heading}</div>

              <div
                dangerouslySetInnerHTML={{
                  __html: `${companyInfo?.about_company}`,
                }}
              />
              <MainButton
                ButtonName2="More About"
                Button2={true}
                onClick={undefined}
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <img src={item.imgSrc1} className="relative w-full h-72" alt="" />
              <div className="absolute -bottom-1/4 right-1/4">
                <img
                  src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.about_image_path}`}
                  className=""
                  alt="About Image"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default AboutCompanySection
