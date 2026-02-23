import React from 'react'
import Link from 'next/link'

interface ProjectListItemLeftProps {
  value: any
  handleImageClick: (project: any) => void
}

const ProjectListItemLeft: React.FC<ProjectListItemLeftProps> = ({
  value,
  handleImageClick,
}) => (
  <div className="flex md:contents" key={value.id}>
    <div className="hidden md:block relative my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
      <div className="col-span-4 w-full h-full">
        <div className="my-6 bg-white lg:my-8">
          <div className="w-vh mx-auto sm:px-6 lg:px-16">
            <div className="overflow-x-auto border">
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td className="px-6 py-4 font-semibold">ARCHITECT</td>
                    <td className="px-6 py-4">{value?.architecture}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      AREA OF CONSTRUCTION
                    </td>
                    <td className="px-6 py-4">
                      {value?.area_of_construction}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      NO. OF BUILDINGS
                    </td>
                    <td className="px-6 py-4">{value?.no_of_building}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      NO. OF STOREYS
                    </td>
                    <td className="px-6 py-4">{value?.no_of_stories}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">LOCATION</td>
                    <td className="px-6 py-4">{value?.location}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      PROJECT STATUS
                    </td>
                    <td className="px-6 py-4">{value.project_status}</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-col px-4 py-4">
                {/* Tooltip */}
                <div className="relative flex mb-4 font-semibold py-2">
                  Progress
                  <div className="relative ml-2 flex flex-col items-center group">
                    <div className="tooltip">
                      <svg
                        aria-haspopup="true"
                        className="icon icon-tabler icon-tabler-info-circle cursor-pointer"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                        <polyline points="11 12 12 12 12 16 13 16" />
                      </svg>
                      <span className="tooltiptext">
                        Basement - {value?.specification}
                        <div>{value?.project_description}</div>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-neutral-200 dark:bg-neutral-600 rounded-md overflow-hidden">
                  <div
                    className="bg-[#C59648] text-center text-xs font-medium leading-none text-white p-0.5"
                    style={{
                      width: `${value.progress}%`,
                      borderRadius: '6px',
                    }}
                  >
                    {value.progress}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
      <div className="flex items-center justify-center w-4 h-full">
        <div className="w-1 h-full bg-primaryColor"></div>
      </div>
      <div className="absolute w-14 h-6 rounded-full bg-primaryColor z-10 text-white text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {value?.year}
      </div>
    </div>

    <div className="relative my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto md:flex md:justify-center md:items-center">
      <div className="w-full mx-auto sm:px-6 lg:px-16">
        <div className="skeleton">
          <div className="relative flex-none w-full mb-10 before:rounded hover:before:border-transparent before:border before:absolute before:top-4 before:left-4 before:w-full before:h-full hover:before:bg-primaryColor data-placeholder">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${value.thumbnail_image_path}`}
              alt="Project Thumbnail Image"
              className="relative w-[100%] h-full before:absolute "
              onClick={() => handleImageClick(value)}
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center my-auto text-sm">
            <img
              className="mr-3"
              src="images/Footer/FooterListIcon.svg"
              alt="Footer List Icon"
            />
            <div className="text-sm font-medium text-gray-900">
              {value?.owner}
            </div>
          </div>
          <Link href={`/project-details/${value.id}`}>
            <a className="text-2xl font-medium text-gray-900 hover:text-primaryColor">
              {value?.name}
            </a>
          </Link>
        </div>
      </div>
      <div className="md:hidden block relative my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
        <div className="col-span-4 w-full h-full ">
          <div className="my-6 bg-white lg:my-8 anybody">
            <div className="w-full mx-auto sm:px-6 lg:px-16">
              <div className="overflow-x-auto">
                <table className="table-auto border">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2">ARCHITECT</td>
                      <td className="py-2 px-2">{value?.architecture}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">AREA OF CONSTRUCTION</td>
                      <td className="py-2 px-2">
                        {value?.area_of_construction}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">NO. OF BUILDINGS</td>
                      <td className="py-2 px-2">{value?.no_of_building}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">NO. OF STOREYS</td>
                      <td className="py-2 px-2">{value?.no_of_stories}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">LOCATION</td>
                      <td className="py-2 px-2">{value?.location}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">PROJECT STATUS</td>
                      <td className="py-2 px-2">{value.project_status}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex flex-col px-4 py-4">
                  {/* Tooltip */}
                  <div className="relative flex mb-4 font-semibold py-2">
                    Progress
                    <div className="relative ml-2 flex flex-col items-center group">
                      <div className="tooltip">
                        <svg
                          aria-haspopup="true"
                          className="icon icon-tabler icon-tabler-info-circle cursor-pointer"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx="12" cy="12" r="9" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                          <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                        <span className="tooltiptext">
                          Basement - {value?.specification}
                          <div>{value?.project_description}</div>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-neutral-200 dark:bg-neutral-600 rounded-md overflow-hidden">
                    <div
                      className="bg-[#C59648] text-center text-xs font-medium leading-none text-white p-0.5"
                      style={{
                        width: `${value.progress}%`,
                        borderRadius: '6px',
                      }}
                    >
                      {value.progress}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectListItemLeft
