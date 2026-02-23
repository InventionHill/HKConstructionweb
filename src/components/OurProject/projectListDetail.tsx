/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
import React, { useContext } from 'react'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'
interface ProjectDetailType {
  ProjectDetailData?: any
}

const ProjectDetailSection = (props: ProjectDetailType) => {
  const { companyInfo } = useContext(CompanyInfoContext)

  return (
    <div className="mx-6 my-16 md:mx-10 lg:mx-16 xl:mx-24 anybody">
      {props.ProjectDetailData.map((project: any, i: any) => (
        <div className="" key={i}>
          {/* ... existing content ... */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/HomePage/MiniLogoAboutSection.svg"
                className="w-6 h-6 object-contain"
                alt="Mini Logo"
              />
              <div className="text-sm font-bold tracking-widest text-[#C59648] uppercase">
                {project.title}
              </div>
            </div>
            <div className="text-[40px] md:text-[50px] font-medium text-gray-800 leading-tight md:w-4/5">
              {project.hedging}
            </div>
          </div>

          <div className="items-center justify-between space-y-6 md:space-y-0 md:flex my-8">
            <div className="flex space-x-4 items-center">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="/images/OurProject/img16.svg"
                alt="Architect Avatar"
              />
              <div>
                <div className="text-gray-500 text-sm">Architect by</div>
                <div className="text-gray-900 text-lg font-medium tracking-wide">
                  {project.architect_name || 'Johnsan Romina'}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 px-4 ">
              <a
                href={`${companyInfo?.facebook_link}`}
                className="inline-flex items-center mx-auto p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-[#000000] hover:border-transparent hover:bg-primaryColor"
              >
                <img
                  src="images/OurProject/imgIcon4.svg"
                  alt="Project List ImgIcon 4"
                  className="w-4 h-4"
                />
              </a>
              <a
                href={`${companyInfo?.twitter_link}`}
                className="inline-flex items-center mx-auto p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-[#000000] hover:border-transparent hover:bg-primaryColor"
              >
                <img
                  src="images/OurProject/imgIcon1.svg"
                  alt="Project List ImgIcon 1"
                  className="w-4 h-4"
                />
              </a>
              <a
                href={`${companyInfo?.youtube_link}`}
                className="inline-flex items-center mx-auto p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-[#000000] hover:border-transparent hover:bg-primaryColor"
              >
                <img
                  src="images/OurProject/imgIcon2.svg"
                  alt="Project List ImgIcon 2"
                  className="w-4 h-4"
                />
              </a>
              <a
                href={`${companyInfo?.insta_link}`}
                className="inline-flex items-center mx-auto p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-[#000000] hover:border-transparent hover:bg-primaryColor"
              >
                <img
                  src="images/OurProject/imgIcon3.svg"
                  alt="Project List ImgIcon 3"
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>

          {project.plane.map((item: any, i: any) => (
            <div className="relative mt-8 mb-16" key={`plane-${i}`}>
              <img
                className="w-full h-auto object-cover max-h-[700px] rounded-sm"
                src={item.imgSrc}
                alt="Background Image"
              />
              <div className="md:absolute bottom-10 left-6 lg:left-12 max-w-[340px] md:max-w-md w-full">
                <div className="w-full px-8 py-8 md:py-10 space-y-5 bg-white shadow-lg text-[15px]">
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-gray-600">Architect</span>
                    <span className="text-gray-900 text-right w-1/2">{item.architect}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-gray-600">Area of construction</span>
                    <span className="text-gray-900 text-right w-1/2">{item.are_of_construction}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-gray-600">No. of Buildings</span>
                    <span className="text-gray-900 text-right w-1/2">{item.no_of_buildings}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-gray-600">No. of Storeys</span>
                    <span className="text-gray-900 text-right w-1/2">{item.no_of_storeys}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-gray-600">Location</span>
                    <span className="text-gray-900 text-right w-1/2">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="space-y-6 text-gray-700 leading-loose text-[15px]">
            {project.description.map((item: any, idx: number) => (
              <div key={`desc-${idx}`}>{item.name}</div>
            ))}
          </div>

          <div className="space-y-4 my-12">
            {project.list.map((item: any, idx: number) => (
              <div className="flex items-start" key={`list-${idx}`}>
                <svg className="w-[18px] h-[18px] mr-4 text-[#C59648] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7 12 2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
                <div className="text-gray-800 text-[15px] font-medium pt-0.5">{item.name}</div>
              </div>
            ))}
          </div>

          {project.imgList && project.imgList.length > 0 && (
            <div className="grid w-full grid-cols-1 gap-6 my-16 md:grid-cols-3">
              {project.imgList.map((item: any, i: any) => (
                <div key={`img-${i}`}>
                  <img
                    className="w-full h-[250px] object-cover rounded shadow-sm hover:opacity-90 transition-opacity"
                    src={item.imgSrc}
                    alt="More project Image"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectDetailSection
