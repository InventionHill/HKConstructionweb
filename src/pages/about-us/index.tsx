import PartnerLogoSection from '../../components/Home Page/PartnerLogo'
import BannerOtherPage from '../../components/Home Page/OtherPageBanner'
import AboutUsSection from '../../components/About Page/aboutCompany'
import CountersSection from '../../components/Home Page/Counters'
import { useCounterInfo } from '../../framework/basic-react/auth/countersInfo'
import { useOurPartner } from '../../framework/basic-react/auth/partnerData'

const AboutUs = () => {
  const { data: counterInfo } = useCounterInfo()
  const { data: ourPartner } = useOurPartner()

  return (
    <>
      <div>
        <div className="space-y-24">
          <div className="lg:pageBanner">
            <BannerOtherPage
              ImgSrc="images/AboutPage/AboutBanner-min.png"
              hedging="About Us"
              PageName="About Us"
            />
          </div>
          <AboutUsSection />
          <CountersSection Scroll={600} CounterData={counterInfo} />
          <PartnerLogoSection PartnerLogoData={ourPartner} />
          <div></div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
