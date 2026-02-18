import PartnerLogoSection from '../../components/Home Page/PartnerLogo'
import BannerOtherPage from '../../components/Home Page/OtherPageBanner'
import GetInTouchSection from '../../components/ContactUs Page/GetInTouch'
import { getInTouch } from '../../../public/json/data'
import { useOurPartner } from '../../framework/basic-react/auth/partnerData'

const AboutUs = () => {
  const { data: ourPartner } = useOurPartner()

  return (
    <div>
      <div className="space-y-24">
        <div className="lg:pageBanner">
          <BannerOtherPage
            ImgSrc="images/ContactUsPage/ContactUsBanner-min.png"
            hedging="Contact US"
            PageName="Contact US"
          />
        </div>
        <GetInTouchSection GetInTouchData={getInTouch} />
        <PartnerLogoSection PartnerLogoData={ourPartner} />
        <div></div>
      </div>
    </div>
  )
}

export default AboutUs
