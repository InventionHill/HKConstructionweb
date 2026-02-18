/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Carousel from '../CarouselComponents/Carousel'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'
import ImageModal from '../Image Modal/ImageModal'
interface Props {
  ProjectsPreviewData?: any
  filterValue: any
  variant?: 'default' | 'modern' | 'circle' | 'list'
}

const breakpoints = {
  '1780': {
    slidesPerView: 4,
    spaceBetween: 36,
  },
  '1280': {
    slidesPerView: 4,
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
    spaceBetween: 12,
  },
  '0': {
    slidesPerView: 2,
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

const buttonData = [
  { id: '1', label: 'All', filterValue: 0 },
  { id: '3', label: 'Ongoing', filterValue: 'Ongoing' },
  { id: '2', label: 'Completed', filterValue: 'Completed' },
  { id: '4', label: 'Upcoming', filterValue: 'Upcoming' },
]

const ProjectsPreviewSection: React.FC<Props> = ({
  ProjectsPreviewData = [],
  filterValue,
  variant = 'default',
}) => {
  const { companyInfo } = useContext(CompanyInfoContext)
  const [selectValue, setSelecteValue] = useState('1')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<any>()

  const handleImageClick = (ProjectsPreviewData: any) => {
    const images =
      ProjectsPreviewData.images !== null &&
      ProjectsPreviewData.images.map((t: any) => t.image_path)
    const data = ProjectsPreviewData.thumbnail_image_path
    if (ProjectsPreviewData.images !== null) {
      setModalImage([data, ...images])
    } else {
      setModalImage([data])
    }
    setModalOpen(true)
  }

  return (
    <>
      <div className="my-10 anybody">
        <div className="bg-cover bg-[url('/images/HomePage/img3.png')] h-full py-14">
          <div className="space-y-4">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
              className="w-12 h-12 mx-auto inset-x-1/2"
              alt="Mini Logo"
            />
            <div className="text-base font-medium text-center text-primaryColor">
              PROJECTS PREVIEW
            </div>
            <div className="text-4xl font-medium text-center">
              Latest Studio Projects
            </div>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-center mx-6 md:mx-10 lg:mx-96 p-2">
            {buttonData.map((button: any) => (
              <button
                key={button.id}
                type="button"
                id={button.id}
                className={
                  selectValue === button.id
                    ? `text-white bg-[#C59648] font-bold rounded-md text-base px-3 py-2 text-center`
                    : `text-black font-bold rounded-md text-base px-3 py-2 text-center ${
                        filterValue === button.filterValue
                          ? 'bg-[#C59648]'
                          : 'bg-transparent border border-[#C59648]'
                      }`
                }
                onClick={() => {
                  setSelecteValue(button.id)
                  filterValue(button.filterValue)
                }}
              >
                {button.label}
              </button>
            ))}
          </div>

          <div className="mx-6 md:mx-10 lg:mx-16">
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
              } bottom-0 md:bottom-10 lg:bottom-10 left-[35%] md:left-[42%] lg:left-[46%]`}
              nextActivateId="ProjectNext"
              prevActivateId="ProjectPrev"
            >
              <div className="">
                {ProjectsPreviewData &&
                  ProjectsPreviewData.length > 0 &&
                  ProjectsPreviewData.map((item: any, i: any) => (
                    <SwiperSlide key={i}>
                      <div className="w-full h-full mt-10">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${item.thumbnail_image_path}`}
                          alt="Project Thumbnail Image"
                          className="relative w-[100%] h-full before:absolute"
                          onClick={() => handleImageClick(item)}
                        />
                      </div>
                      <div className="mt-5 text-black font-bold text-xl">
                        {item.name}
                      </div>
                    </SwiperSlide>
                  ))}
              </div>
              <div className="my-28 space-y-2"></div>
            </Carousel>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={modalOpen}
        imageUrl={modalImage}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}

export default ProjectsPreviewSection
