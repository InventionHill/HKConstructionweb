import TermsAndConditions from '../../components/Terms Condition/TermsConditions'
import BannerOtherPage from '../../components/Home Page/OtherPageBanner'

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="lg:pageBanner">
          <BannerOtherPage
            ImgSrc="images\TermsConditions\TermsConditionsBanner.jpg"
            hedging="Terms & Conditions"
            PageName="Terms & Conditions"
          />
        </div>
        <TermsAndConditions />
        <div></div>
      </div>
    </>
  )
}

export default AboutUs
