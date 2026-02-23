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
    <div className="h-full mx-6 md:mx-10 lg:mx-16 xl:mx-24 space-y-16 lg:space-y-24 anybody">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {bestConstruction?.map((value: any, index: any) => (
          <div className="flex flex-col w-full h-full" key={value.id}>
            {index % 2 === 0 ? (
              <>
                <div className="flex flex-col justify-start p-8 md:p-10 lg:p-12 xl:p-16 bg-black w-full h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
                  <div className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-md bg-[#C59648] p-3 mb-6 flex items-center justify-center shrink-0">
                    <img
                      className="w-full h-full object-contain"
                      src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.icon_path}`}
                      alt="Features Icon"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#C59648] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-[17px] text-white font-light leading-relaxed opacity-90 filter drop-shadow-sm line-clamp-6 md:line-clamp-none">
                    {value.description}
                  </p>
                </div>
                <div className="w-full h-[450px] md:h-[500px] lg:h-[550px]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.image_path}`}
                    alt="Features Image"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-full h-[450px] md:h-[500px] lg:h-[550px]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.image_path}`}
                    alt="Features Image"
                  />
                </div>
                <div className="flex flex-col justify-start p-8 md:p-10 lg:p-12 xl:p-16 bg-black w-full h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
                  <div className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-md bg-[#C59648] p-3 mb-6 flex items-center justify-center shrink-0">
                    <img
                      className="w-full h-full object-contain"
                      src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.icon_path}`}
                      alt="Features Icon"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#C59648] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-[17px] text-white font-light leading-relaxed opacity-90 filter drop-shadow-sm line-clamp-6 md:line-clamp-none">
                    {value.description}
                  </p>
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
