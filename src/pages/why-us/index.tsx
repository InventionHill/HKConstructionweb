import PartnerLogoSection from '../../components/Home Page/PartnerLogo'
import BannerOtherPage from '../../components/Home Page/OtherPageBanner'
import ProvideCustomersSection from '../../components/Why Us/provideCustomers'
import { useWhyUS } from '../../framework/basic-react/auth/whyUs'
import { useOurPartner } from '../../framework/basic-react/auth/partnerData'
import { useEffect, useState } from 'react'

const AboutUs = () => {
  const [saveData, setSaveData] = useState<any>()

  const { data: WhyUS } = useWhyUS()
  const { data: ourPartner } = useOurPartner()

  useEffect(() => {
    if (WhyUS && WhyUS != undefined) {
      setSaveData(WhyUS)
    } else {
      setSaveData([{ WhyUS }])
    }
  }, [WhyUS])

  return (
    <div>
      <div className="space-y-24">
        <div className="lg:pageBanner">
          <BannerOtherPage
            ImgSrc="images/whyUsPage/WhyUsBanner-min.png"
            hedging="Why Choose Us"
            PageName="Why Choose Us"
          />
        </div>
        <ProvideCustomersSection
          ProvideCustomersData={saveData?.awards}
          BestConstructionData={saveData?.features}
        />
        <PartnerLogoSection PartnerLogoData={ourPartner} />
        <div></div>
      </div>
    </div>
  )
}

export default AboutUs
