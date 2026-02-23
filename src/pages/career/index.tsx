import PartnerLogoSection from '../../components/Home Page/PartnerLogo'
import BannerOtherPage from '../../components/Home Page/OtherPageBanner'
import { useOurPartner } from '../../framework/basic-react/auth/partnerData'
import CareerSection from '../../components/Career Page/Career'

const AboutUs = () => {
  const { data: ourPartner } = useOurPartner()

  return (
    <div>
      <div className="space-y-16 lg:space-y-24">
        <div className="lg:pageBanner">
          <BannerOtherPage
            ImgSrc="images/CarrerPage/career.jpg"
            hedging="Career"
            PageName="Career"
          />
        </div>
        <CareerSection />
        <PartnerLogoSection PartnerLogoData={ourPartner} />
        <div></div>
      </div>
    </div>
  )
}

export default AboutUs
