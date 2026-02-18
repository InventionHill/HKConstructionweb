/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import { useWhyUS } from '../../framework/basic-react/auth/whyUs'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'

interface ProvideCustomerType {
  ProvideCustomersData?: any
  BestConstructionData?: any
}

const ProvideCustomersSection = (props: ProvideCustomerType) => {
  const bestConstruction = props.BestConstructionData || []

  const { data: WhyUS } = useWhyUS()
  const { companyInfo } = useContext(CompanyInfoContext)

  return (
    <div className="h-full mx-4 my-16 space-y-20 md:mx-10 lg:mx-12 anybody">
      <div className="justify-between md:flex bg-center bg-cover bg-[url('/images/whyUsPage/hk-bg.png')]">
        <div className="md:w-1/2">
          <img
            className="h-[600px]"
            src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${WhyUS?.main_image_path}`}
            alt="Side Image"
          />
        </div>

        <div className="mt-6 space-y-12 md:w-1/2">
          <div className="space-y-2">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
              className="w-8 h-8 inset-x-1/2"
              alt="Mini Logo"
            />
            <div className="text-base font-medium text-primaryColor">
              {WhyUS?.title1}
            </div>
            <div className="text-4xl font-medium ">{WhyUS?.title2}</div>
            <div
              dangerouslySetInnerHTML={{ __html: `${WhyUS?.description}` }}
            />
          </div>

          <div className="space-y-9">
            <div className="flex items-center my-auto space-x-3">
              <img
                src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
                className="w-8 h-8"
                alt="Mini Logo"
              />
              <div className="text-base font-semibold text-primaryColor">
                Over Awards
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 lg:grid-cols-3">
              {props?.ProvideCustomersData?.map((item: any, i: any) => (
                <div className="mx-auto space-y-3 inset-x-1/2" key={i}>
                  <img
                    className="mx-auto inset-x-1/2"
                    src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${item.image_path}`}
                    alt="Awards Image"
                  />
                  <div className="text-base text-center">{item.year}</div>
                  <div className="text-base text-center">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-2 gap-0 lg:grid-cols-4">
        {bestConstruction?.map((value: any, index: any) => (
          <div className="min-h-full" key={value.id}>
            {index % 2 === 0 ? (
              <>
                <div className="px-3 py-6 space-y-2 bg-black md:space-y-6 h-1/2">
                  <div className="w-10 h-10 p-1.5 rounded-md md:p-3 md:w-16 md:h-16 bg-primaryColor">
                    <img
                      className="inset-0 w-full h-full m-auto"
                      src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.icon_path}`}
                      alt="Features Icon"
                    />
                  </div>
                  <div className="text-sm font-medium md:text-xl text-secondaryColor hover:text-primaryColor">
                    {value.title}
                  </div>
                  <div className="text-xs md:text-base text-secondaryColor">
                    {value.description}
                  </div>
                </div>
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full"
                    src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.image_path}`}  
                    alt="Features Image"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-full h-1/2" key={value.id}>
                  <img
                    className="w-full h-full"
                    src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.image_path}`}
                    alt="Features Image"
                  />
                </div>
                <div className="px-3 py-6 space-y-2 bg-black md:space-y-6 h-1/2">
                  <div className="w-10 h-10 p-1.5 rounded-md md:p-3 md:w-16 md:h-16 bg-primaryColor">
                    <img
                      className="inset-0 w-full h-full m-auto"
                      src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.icon_path}`}
                      alt="Features Icon"
                    />
                  </div>
                  <div className="text-sm font-medium md:text-xl text-secondaryColor hover:text-primaryColor">
                    {value.title}
                  </div>
                  <div className="text-xs md:text-base text-secondaryColor">
                    {value.description}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProvideCustomersSection
