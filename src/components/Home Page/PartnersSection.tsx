import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
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
    <div className="bg-[#EFEFF1] w-full py-5 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_60%] gap-4 items-center">

        {/* Left Side: Text Banner rounded on right */}
        <div className="w-full relative py-6 md:py-0">
          <div className="bg-white py-16 px-6 md:px-12 rounded-r-[100px] xl:rounded-r-[200px] shadow-sm flex flex-col items-center justify-center relative z-10 lg:h-[350px]">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
              className="w-14 h-14 object-contain mb-4"
              alt="Mini logo"
            />
            <div className="text-sm font-bold text-[#C59648] uppercase tracking-wider mb-2">
              OUR Partners
            </div>
            <div className="text-3xl md:text-[40px] font-bold text-black text-center whitespace-nowrap">
              Group of Companies
            </div>
          </div>
        </div>

        {/* Right Side: Swiper Carousel */}
        <div className="w-full px-4 md:px-8 xl:pr-24 overflow-hidden">
          {partner && partner.length > 0 && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
              className="w-full py-4"
            >
              {partner.map((item: any) => (
                <SwiperSlide key={item?.id}>
                  <div className="bg-white rounded-xl h-[160px] p-6 shadow-[0px_2px_15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center transform transition duration-300 hover:scale-[1.02]">
                    <img
                      src={imageUrl + item?.image_path}
                      className="w-full h-[80px] object-contain mb-3"
                      alt={item?.name || "Partner Logo"}
                    />
                    <div className="text-sm font-medium text-black text-center truncate w-full">
                      {item?.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

      </div>
    </div>
  )
}

export default PartnersSection
