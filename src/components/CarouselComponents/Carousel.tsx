/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useRef } from 'react'
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper } from 'swiper/react'
// import { getDirection } from "utils/get-direction";
import { getDirection } from '../../../utils/get-direction'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import React from 'react'

type CarouselPropsType = {
  children: React.ReactNode
  className?: string
  buttonGroupClassName?: string
  prevActivateId?: string
  nextActivateId?: string
  paginationFractionId?: string
  prevButtonClasses?: string
  nextButtonClasses?: string
  buttonSize?: 'default' | 'small'
  paginationVariant?: 'default' | 'circle'
  paginationPosition?: 'center' | 'left' | 'right'
  loop?: boolean
  centeredSlides?: boolean
  breakpoints?: `{}` | any
  pagination?: ` {}` | any
  navigation?: `{}` | any
  scrollbar?: `{}` | any
  autoplay?: `{}` | any
  type?: 'rounded' | 'circle' | 'list'
  isFraction?: boolean
}

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
  children,
  className = '',
  buttonGroupClassName = '',
  prevActivateId = '',
  nextActivateId = '',
  paginationFractionId = '',
  prevButtonClasses = 'ltr:left-0 rtl:right-0',
  nextButtonClasses = 'ltr:right-0 rtl:left-0',
  buttonSize = 'default',
  paginationVariant = 'default',
  paginationPosition,
  breakpoints,
  loop = true,
  navigation = true,
  // pagination = true,
  autoplay = true,
  type = 'circle',
  isFraction = false,
  ...props
}) => {
  const { locale } = useRouter()
  const dir = getDirection(locale)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const classPagination = paginationPosition
    ? `pagination-${paginationPosition}`
    : ''

  const nextButtonClassName = cn(
    'h-12 w-12 items-center rounded bg-transparent absolute transition duration-250 hover:bg-transparent transform left-[90%] lg:left-[90%] ltr:shadow-navigation ltr:translate-x-1/2 rtl:shadow-navigationReverse rtl:-translate-x-1/2',
    {
      'rounded-full': type === 'list',
      'lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm xl:text-lg md:text-base lg:text-xl 3xl:text-2xl':
        buttonSize === 'default',
      '!static': type === 'list',
    },
    nextButtonClasses,
  )

  const prevButtonClassName = cn(
    'items-center rounded bg-transparent absolute transition duration-250  hover:bg-transparent left-[10%] lg:left-[10%] transform ltr:shadow-navigation ltr:-translate-x-1/2 rtl:shadow-navigationReverse rtl:translate-x-1/2',
    {
      'rounded-full': type === 'list',
      'lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm xl:text-lg md:text-base lg:text-xl 3xl:text-2xl':
        buttonSize === 'default',
      '!static': type === 'list',
    },
    prevButtonClasses,
  )
  return (
    <div
      className={`carouselWrapper relative ${className} ${classPagination} ${
        paginationVariant === 'circle' ? 'dotsCircle' : ''
      } ${type === 'list' ? '!static' : ''}`}
    >
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        // style={{swipern}}
        className="swipern"
        loop={loop}
        slidesPerView="auto"
        autoplay={autoplay}
        breakpoints={breakpoints}
        // pagination={pagination}
        dir={dir}
        key={0}
        navigation={
          navigation
            ? {
                prevEl: prevActivateId.length
                  ? `#${prevActivateId}`
                  : prevRef.current!, // Assert non-null
                nextEl: nextActivateId.length
                  ? `#${nextActivateId}`
                  : nextRef.current!, // Assert non-null
              }
            : {}
        }
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div> // Provide a unique key for each child
        ))}
      </Swiper>
      {(Boolean(navigation) || Boolean(isFraction)) && (
        <div
          className={cn(
            `flex items-center px-8 absolute z-10 ${buttonGroupClassName}`,
            {
              '': type === 'list',
            },
          )}
        >
          {prevActivateId.length > 0 ? (
            <button
              className={prevButtonClassName}
              id={prevActivateId}
              aria-label="prev-button"
            >
              {/* {dir === "rtl" ? <IoIosArrowForward /> : <IoIosArrowBack />} */}
              {dir === 'rtl' ? (
                <img
                  src="images\HomePage\nextButtonIcon.png"
                  className="w-10 h-6 lg:w-12"
                  alt="Next Button Icon"
                />
              ) : (
                <img
                  src="images\HomePage\prvButtonIcon.png"
                  className="w-10 h-6 lg:w-12"
                  alt="Prv Button Icon"
                />
              )}
            </button>
          ) : (
            <button
              ref={prevRef}
              className={prevButtonClassName}
              aria-label="prev-button"
            >
              {dir === 'rtl' ? (
                <img
                  src="images\HomePage\nextButtonIcon.png"
                  className="w-10 h-6 lg:w-12"
                  alt="Next Button Icon"
                />
              ) : (
                <img
                  src="images\HomePage\prvButtonIcon.png"
                  className="w-10 h-6 lg:w-12"
                  alt="Prv Button Icon"
                />
              )}
            </button>
          )}

          {Boolean(isFraction) && (
            <div
              className="text-xs sm:text-base text-center !w-[auto]"
              id={paginationFractionId}
            />
          )}

          {nextActivateId.length > 0 ? (
            <button
              className={nextButtonClassName}
              id={nextActivateId}
              aria-label="next-button"
            >
              {dir === 'rtl' ? (
                <img
                  src="images\HomePage\prvButtonIcon.png"
                  className="w-10 h-6 lg:w-12"
                  alt="Prv Button Icon"
                />
              ) : (
                <img
                  src="images\HomePage\nextButtonIcon.png"
                  className="w-10 h-6 lg:w-12"
                  alt="Next Button Icon"
                />
              )}
            </button>
          ) : (
            <button
              ref={nextRef}
              className={nextButtonClassName}
              aria-label="next-button"
            >
              {dir === 'rtl' ? (
                <img
                  src="images\HomePage\prvButtonIcon.png"
                  className="w-10 h-6 lg:w-12"
                  alt="Prv Button Icon"
                />
              ) : (
                <img
                  src="images\HomePage\nextButtonIcon.png"
                  className="w-10 h-6 lg:w-12"
                  alt="Next Button Icon"
                />
              )}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Carousel
