/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Carousel from '../CarouselComponents/Carousel'

interface Props {
  PartnerLogoData?: any
  variant?: 'default' | 'modern' | 'circle' | 'list'
}

const breakpoints = {
  '1780': {
    slidesPerView: 5,
    spaceBetween: 36,
  },
  '1280': {
    slidesPerView: 5,
    spaceBetween: 36,
  },
  '1025': {
    slidesPerView: 3,
    spaceBetween: 32,
  },
  '768': {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  '480': {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  '0': {
    slidesPerView: 2,
    spaceBetween: 5,
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

const PartnerLogoSection: React.FC<Props> = ({
  PartnerLogoData,
  variant = 'default',
}) => {
  return (
    <div className="anybody">
      <div className="mx-6 md:mx-10 lg:mx-16 xl:mx-24">
        <Carousel
          breakpoints={
            variant === 'list'
              ? breakpointsCircle
              : variant === 'circle'
                ? breakpointsList
                : breakpoints
          }
          className={``}
          autoplay={false}
          navigation={false}
          paginationPosition="center"
          prevButtonClasses={`ltr:left-6 rtl:right-6 ltr:md:left-8 rtl:md:right-8 ltr:xl:left-12 rtl:xl:right-12 ltr:2xl:left-24 rtl:2xl:right-24 mx-24`}
          nextButtonClasses={`ltr:right-6 rtl:left-6 ltr:md:right-8 rtl:md:left-8 ltr:xl:right-12 rtl:xl:left-12 ltr:2xl:right-24 rtl:2xl:left-24 `}
          buttonGroupClassName={`${variant === 'circle' ? '-mt-0' : '-mt-0'} `}
          nextActivateId="ProjectNext"
          prevActivateId="ProjectPrev"
        >
          <div className="grid grid-cols-5 gap-4 my-10">
            {PartnerLogoData?.map((item: any, i: any) => (
              <SwiperSlide className="" key={i}>
                <div className="flex ">
                  <div className="w-full max-h-[150px] ">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${item.image_path}`}
                      alt="Partner Logo"
                      className="w-full text-gray-400 rounded h-full"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default PartnerLogoSection
