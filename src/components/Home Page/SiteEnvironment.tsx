import React, { useEffect, useState } from 'react'
import { useSiteEnvironment } from '../../framework/basic-react/auth/siteEnvironmentSectionGet'

const SiteEnvironmentSection = () => {
  const [solarplan, setSolarplan] = useState<any>()

  // SiteEnvironmentSection api
  const { data: solarplanData, isSuccess: solarplanDataSuccess } =
    useSiteEnvironment()

  useEffect(() => {
    if (solarplanDataSuccess) {
      setSolarplan(solarplanData?.data?.result)
    }
  }, [solarplanDataSuccess, solarplanData])

  const imageUrl = process.env.NEXT_PUBLIC_IMG_ENDPOINT

  return (
    <div className="mx-6 md:mx-10 lg:mx-16 xl:mx-24 anybody fit-content">
      <div
        className="grid justify-between h-full grid-cols-1 py-4 md:grid-cols-2"
        key={solarplan?.title}
      >
        <div className="order-2 md:order-1 mt-4 flex justify-center items-center">
          <div className="relative">
            <img
              src={imageUrl + solarplan?.image_path}
              className="relative w-[550px] h-[400px]"
              alt="solarplan image"
            />
          </div>
        </div>

        <div className="order-1 md:order-2 w-full flex justify-center items-center">
          <div className="space-y-4 md:w-3/4">
            <div className="space-y-6 flex flex-col">
              <p className="text-5xl font-medium">{solarplan?.title}</p>
              <div
                className="space-y-5"
                dangerouslySetInnerHTML={{ __html: solarplan?.paragraph }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SiteEnvironmentSection
