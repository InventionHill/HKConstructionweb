import PartnerLogoSection from '../../components/Home Page/PartnerLogo'
import BannerOtherPage from '../../components/Home Page/OtherPageBanner'
import ProjectDetailSection from '../../components/OurProject/projectListDetail'
import { projectDetailData } from '../../../public/json/data'
import { useOurPartner } from '../../framework/basic-react/auth/partnerData'

const ProjectDetail = () => {
  const { data: ourPartner } = useOurPartner()

  return (
    <div>
      <div className="space-y-24">
        <div className="lg:pageBanner">
          <BannerOtherPage
            ImgSrc="images\OurProject\ProjectBanner.svg"
            hedging="Project Detail"
            PageName="Project Detail"
          />
        </div>
        <ProjectDetailSection ProjectDetailData={projectDetailData} />
        <PartnerLogoSection PartnerLogoData={ourPartner} />
        <div></div>
      </div>
    </div>
  )
}

export default ProjectDetail
