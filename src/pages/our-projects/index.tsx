// import Image from 'next/image'
import PartnerLogoSection from '../../components/Home Page/PartnerLogo'
import BannerOtherPage from '../../components/Home Page/OtherPageBanner'
import ProjectListSection from '../../components/OurProject/ProjectList'
import { useOurPartner } from '../../framework/basic-react/auth/partnerData'
import { useEffect, useState } from 'react'
import { useOurProject } from '../../framework/basic-react/auth/ourProject'

const OurProject = () => {
  const [saveData, setSaveData] = useState<any>()
  const [filter, setFilter] = useState(0)
  const { data, mutate: ourProjects } = useOurProject()
  const { data: ourPartner } = useOurPartner()

  useEffect(() => {
    if (data?.data?.data && data?.data?.data != undefined) {
      setSaveData(data?.data.data)
    } else {
      const value = data?.data.data
      setSaveData([{ value }])
    }
  }, [data?.data.data])

  useEffect(() => {
    ourProjects(filter)
  }, [filter, ourProjects])

  return (
    <div>
      <div className="space-y-16 lg:space-y-24">
        <div className="lg:pageBanner">
          <BannerOtherPage
            ImgSrc="images/OurProject/OurProjects-min.png"
            hedging="Our Projects"
            PageName="Our Projects"
          />
        </div>
        <ProjectListSection project={saveData} filterValue={setFilter} />
        <PartnerLogoSection PartnerLogoData={ourPartner} />
        <div></div>
      </div>
    </div>
  )
}

export default OurProject
