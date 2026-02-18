import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MainButton from '../Buttons/ButtonEffects'

interface Props {
  variant?: 'default' | 'modern' | 'circle' | 'list'
  BannerData?: any
}

const Banner: React.FC<Props> = ({ BannerData }) => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    adaptiveHeight: true,
  }

  return (
    <div className="mx-auto max-w-[1920px]">
      <Slider ref={sliderRef} {...settings}>
        {BannerData?.map((item: any) => (
          <div key={`item--key-${item?.id || ''}`}>
            <div className="w-full 2xl:h-screen">
              <div className="absolute w-1/2 mx-12 space-y-1 md:space-y-2 md:mx-16 inset-y-1/4 md:w-2/6 lg:mx-24 md:inset-y-1/2 mt-8 z-50">
                <div className="text-xs font-normal md:text-xl lg:text-5xl text-secondaryColor">
                  {item.title}
                </div>
                <div className="text-[8px] md:text-xs lg:text-base text-secondaryColor">
                  {item.paragraph}
                </div>
                <MainButton
                  ButtonName1={item.button_text}
                  Button1={true}
                  onClick={item.button_link}
                />
              </div>

              {item?.is_video === 1 ? (
                <div className="relative ">
                  <video
                    src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${item.image_path}`}
                    className=" object-cover w-full h-[200px] md:h-[450px] lg:h-[200px] xl:h-screen"
                    autoPlay={true}
                    loop={true}
                    muted
                    onEnded={(e) => {
                      e.currentTarget.play()
                    }}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 pointer-events-none"></div>
                </div>
              ) : (
                <img
                  src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${item.image_path}`}
                  alt="Banner Image"
                  className="w-full text-gray-400 h-[200px] md:h-[450px] lg:h-[200px] xl:h-screen bg-no-repeat bg-cover"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Banner
