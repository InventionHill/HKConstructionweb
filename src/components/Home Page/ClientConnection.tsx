/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Carousel from '../CarouselComponents/Carousel'
import { useClientConnection } from '../../framework/basic-react/auth/clientConnection'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'

interface Props {
  ClientConnection?: any
  FeedBackData?: any
  variant?: 'default' | 'modern' | 'circle' | 'list'
}

const breakpoints = {
  '1780': {
    slidesPerView: 1,
    spaceBetween: 12,
  },
  '1280': {
    slidesPerView: 1,
    spaceBetween: 12,
  },
  '1025': {
    slidesPerView: 1,
    spaceBetween: 32,
  },
  '768': {
    slidesPerView: 1,
    spaceBetween: 24,
  },
  '480': {
    slidesPerView: 1,
    spaceBetween: 12,
  },
  '0': {
    slidesPerView: 1,
    spaceBetween: 12,
  },
}

const breakpointsCircle = {
  '1720': {
    slidesPerView: 8,
    spaceBetween: 48,
  },
  '1400': {
    slidesPerView: 7,
    spaceBetween: 32,
  },
  '1025': {
    slidesPerView: 6,
    spaceBetween: 28,
  },
  '768': {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  '500': {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  '0': {
    slidesPerView: 3,
    spaceBetween: 12,
  },
}

const breakpointsList = {
  '1780': {
    slidesPerView: 5,
    spaceBetween: 12,
  },
  '1280': {
    slidesPerView: 4,
    spaceBetween: 12,
  },
  '1025': {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  '768': {
    slidesPerView: 1,
    spaceBetween: 12,
  },
  '480': {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  '0': {
    slidesPerView: 1.3,
    spaceBetween: 12,
  },
}

const ClientConnectionSection: React.FC<Props> = ({
  ClientConnection,
  FeedBackData,
  variant = 'default',
}) => {
  const { data: clientfeedback } = useClientConnection()

  const { companyInfo } = useContext(CompanyInfoContext)

  return (
    <div className="my-10 anybody">
      {ClientConnection?.map((item: any, i: any) => (
        <div
          key={i}
          className="justify-between flex-1 space-y-12 md:space-y-0 md:flex"
        >
          <div className="w-full px-4 mx-auto my-auto space-y-3 text-center md:w-2/5 md:order-2 bg-center bg-cover bg-[url('/images/HomePage/img14.png')]">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
              className="w-12 h-12 mx-auto inset-x-1/2"
              alt="Mini logo"
            />
            <div className="text-base font-medium text-center text-primaryColor">
              {item.title}
            </div>
            <div className="text-4xl font-medium text-center">
              {clientfeedback?.client?.title}
            </div>
            <p
              className="text-base text-[#777777] px-12"
              dangerouslySetInnerHTML={{
                __html: `${clientfeedback?.client?.description}`,
              }}
            />
          </div>

          <div className="w-full px-6 py-8 bg-black md:py-20 md:w-3/5 md:order-1 md:rounded-r-2xl">
            <Carousel
              breakpoints={
                variant === 'list'
                  ? breakpointsCircle
                  : variant === 'circle'
                  ? breakpointsList
                  : breakpoints
              }
              className={``}
              paginationPosition="center"
              prevButtonClasses={`ltr:left-6 rtl:right-6 ltr:md:left-8 rtl:md:right-8 ltr:xl:left-12 rtl:xl:right-12 ltr:2xl:left-24 rtl:2xl:right-24 `}
              nextButtonClasses={`ltr:right-6 rtl:left-6 ltr:md:right-8 rtl:md:left-8 ltr:xl:right-12 rtl:xl:left-12 ltr:2xl:right-24 rtl:2xl:left-24 `}
              buttonGroupClassName={`${
                variant === 'circle' ? '-mt-0' : '-mt-0'
              } bottom-6 md:bottom-0 lg:bottom-0 left-[5%] md:left-[10%] lg:left-[20%]`}
              nextActivateId="ClientConnectionNext"
              prevActivateId="ClientConnectionPrev"
            >
              {FeedBackData?.result?.map((value: any) => (
                <SwiperSlide className="" key={value.id}>
                  <div className="flex gap-4 lg:gap-0">
                    <div className="w-3/4 py-12 space-y-3 text-right lg:pl-3 ">
                      <div className="text-white lg:pl-20">
                        {value.feedback}
                      </div>
                      <div>
                        <div className="text-2xl font-medium text-secondaryColor">
                          {value.fullname}
                        </div>
                        <div className="text-sm text-primaryColor ">
                          {value.designation}
                        </div>
                      </div>
                    </div>

                    <div className="w-1/4">
                      {value?.is_video === 1 ? (
                        <video
                          src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.image_path}`}
                          className="right-0 w-40 mx-auto h-52 "
                          autoPlay={true}
                          loop={true}
                          muted
                          onEnded={(e) => {
                            e.currentTarget.play()
                          }}
                        />
                      ) : (
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.image_path}`}
                          alt="Feedback Image"
                          className="right-0 w-40 mx-auto h-52 "
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ClientConnectionSection
