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
    <>
      <div className="mx-4 my-16 md:mx-10 lg:mx-12 anybody">
        {props.ProjectDetailData.map((project: any, i: any) => (
          <div className="" key={i}>
            <div className="space-y-2">
              <img
                src="images/HomePage/MiniLogoAboutSection.svg"
                className="w-8 h-8 inset-x-1/2"
                alt="Mini Logo AboutSection"
              />
              <div className="text-base font-medium text-primaryColor">
                {project.title}
              </div>
              <div className="text-4xl font-medium ">{project.hedging}</div>
            </div>

            <div className="items-center justify-between space-y-4 md:flex my-11">
              <div className="flex space-x-5">
                <img
                  className="w-12 h-12 rounded-full"
                  src="images\OurProject\img16.svg"
                  alt="Project List Img16"
                />
                <div>
                  <div className="text-[#6B6868] text-base">Architect by</div>
                  <div className="text-[#000000] text-xl">Johnsan Romina</div>
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
              <div className="relative">
                <img
                  className="w-full h-full"
                  src={item.imgSrc}
                  alt="Background Image"
                />
                <div className="md:absolute bottom-10 left-10 lg:left-24">
                  <div className="w-full px-6 py-3 space-y-2 bg-white rounded">
                    <div className="flex items-center justify-between text-xl">
                      ARCHITECT <span className="w-1/2">{item.architect}</span>
                    </div>
                    <div className="flex items-center justify-between text-xl">
                      AREA OF CONSTRUCTION
                      <span className="w-1/2 ">{item.are_of_construction}</span>
                    </div>
                    <div className="flex items-center justify-between text-xl">
                      NO. OF BUILDINGS
                      <span className="w-1/2">{item.no_of_buildings}</span>
                    </div>
                    <div className="flex items-center justify-between text-xl">
                      NO. OF STOREYS
                      <span className="w-1/2">{item.no_of_storeys}</span>
                    </div>
                    <div className="flex items-center justify-between text-xl">
                      LOCATION <span className="w-1/2">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {project.description.map((item: any) => (
              <div className="my-16 space-y-6 " key={item.id}>
                <div>{item.name}</div>
              </div>
            ))}

            <div className="space-y-3">
              {project.list.map((item: any) => (
                <div className="flex items-center" key={item.id}>
                  <img
                    src="images/Footer/FooterListIcon.svg"
                    alt="Footer List Icon"
                    className="w-4 h-4 mr-3"
                  />
                  <div>{item.name}</div>
                </div>
              ))}
            </div>

            <div className="grid w-full grid-cols-1 gap-4 my-10 lg:grid-cols-3">
              {project.imgList.map((item: any, i: any) => (
                <div>
                  <img
                    className="w-full"
                    src={item.imgSrc}
                    alt="More project List Image"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectDetailSection
