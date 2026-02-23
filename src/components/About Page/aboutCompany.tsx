/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from 'react'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'
import { useCompanyInfo } from '../../framework/basic-react/auth/company'

const AboutUsSection = () => {
  const { data } = useCompanyInfo()
  const { companyInfo, updateCompnyInfo } = useContext(CompanyInfoContext)

  useEffect(() => {
    if (data !== undefined) {
      updateCompnyInfo(data)
    }
  }, [data, updateCompnyInfo])

  return (
    <div>
      <div className="mx-6 md:mx-10 lg:mx-16 xl:mx-24 anybody mb-10">
        <div className="justify-between md:flex bg-cover bg-center bg-[url('/images/HomePage/Section2Bg.png')]">
          <div className="w-full md:w-1/2">
            <div className="space-y-2">
              <img
                src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
                className="w-8 h-8 inset-x-1/2"
                alt="Mini Logo"
              />
              <div className="text-base font-medium text-primaryColor">
                {companyInfo?.welcome_text}
              </div>
              <div className="text-4xl font-medium ">About Company</div>
            </div>
            <div className="my-6 space-y-5 md:w-3/4">
              <div className="space-y-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${companyInfo?.owner_description}`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 mx-auto flex justify-center">
            <img
              className="w-65 md:w-80 h-auto object-contain"
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.owner_image_path}`}
              alt="Owner Image"
            />
          </div>
        </div>
      </div>

      <div className="mx-6 md:mx-10 lg:mx-16 xl:mx-24 anybody">
        <div className="w-full md:flex">
          <div className="md:w-1/2 mx-auto py-10 inset-x-1/2 bg-[#2B2A29] text-center">
            <img
              className="mx-auto my-2"
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.logo_white_image_path}`}
              alt="White Image"
            />
            <div className="text-base text-secondaryColor">our</div>
            <div className="my-4 text-4xl text-secondaryColor">Vision</div>
            <div className="md:w-1/2 w-full mx-auto text-base text-secondaryColor">
              <p
                dangerouslySetInnerHTML={{ __html: `${companyInfo?.vision}` }}
              />
            </div>
          </div>

          <div className="py-10 mx-auto text-center md:w-1/2 inset-x-1/2 bg-primaryColor">
            <img
              className="mx-auto my-2"
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.logo_white_image_path}`}
              alt="White Image"
            />

            <div className="text-base text-secondaryColor">our</div>
            <div className="my-4 text-4xl text-secondaryColor">Mission</div>
            <div className="md:w-1/2 w-full mx-auto text-base text-secondaryColor">
              <p
                dangerouslySetInnerHTML={{ __html: `${companyInfo?.mission}` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
