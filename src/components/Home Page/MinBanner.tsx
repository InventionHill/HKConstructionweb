import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MainButton from '../Buttons/ButtonEffects'

const Slider = dynamic(() => import('react-slick').then((mod) => mod.default as any), {
  ssr: false,
}) as any

interface Props {
  variant?: 'default' | 'modern' | 'circle' | 'list'
  BannerData?: any
}

const NextArrow = (props: any) => {
  const { onClick } = props
  return (
    <div
      className="absolute bottom-12 right-12 md:right-24 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border rounded-full cursor-pointer border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-black transition-colors"
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </div>
  )
}

const PrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <div
      className="absolute bottom-12 right-28 md:right-40 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border rounded-full cursor-pointer border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-black transition-colors"
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5"></path>
        <path d="m12 19-7-7 7-7"></path>
      </svg>
    </div>
  )
}

const Banner: React.FC<Props> = ({ BannerData }) => {
  const sliderRef = useRef<any>(null)

  const settings: any = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    adaptiveHeight: true,
  }

  return (
    <div className="mx-auto max-w-[1920px] relative">
      <Slider ref={sliderRef} {...settings}>
        {BannerData?.map((item: any) => (
          <div key={`item--key-${item?.id || ''}`}>
            <div className="w-full h-screen relative">
              <div className="absolute w-11/12 mx-8 md:mx-16 lg:mx-24 top-1/2 -translate-y-1/2 z-40 max-w-4xl">
                <div className="text-4xl md:text-6xl lg:text-[80px] font-extrabold text-secondaryColor leading-[1.1] tracking-tight whitespace-pre-line mb-6">
                  {item.title}
                </div>
                <div className="text-sm md:text-base lg:text-xl text-secondaryColor font-light tracking-wide mb-10 max-w-2xl">
                  {item.paragraph}
                </div>
                <div className="mt-4">
                  <MainButton
                    ButtonName1={item.button_text || 'DISCOVER PROJECTS'}
                    Button1={true}
                    onClick={item.button_link}
                  />
                </div>
              </div>

              {item?.is_video === 1 ? (
                <div className="relative w-full h-full">
                  <video
                    src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${item.image_path}`}
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${item.image_path}`}
                    alt="Banner Image"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Banner
