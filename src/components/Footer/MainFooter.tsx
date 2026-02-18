/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import { footer } from '../../../public/json/data'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'

const Footer = () => {
  const { companyInfo } = useContext(CompanyInfoContext)

  return (
    <div>
      <footer
        className="anybody bg-cover bg-[url('/images/Footer/Footer-image.png')] h-full"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="w-full">
          <div className="px-4 pt-8 pb-8 lg:pt-16 sm:px-6 lg:px-20">
            <div>
              <img
                className="relative block h-15 w-32 md:w-1/12 md:h-2/4 "
                src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.logo_black_image_path}`}
                alt="Your Company"
              />
            </div>

            <div className="grid w-full grid-cols-1 gap-5 py-3 lg:gap-12 md:grid-cols-3">
              <div className="w-full">
                <div className="text-xl text-primaryColor">INFORMATION</div>
                <p
                  className="my-3 text-base text-secondaryColor"
                  dangerouslySetInnerHTML={{
                    __html: `${companyInfo?.sort_description}`,
                  }}
                />
              </div>

              <div className="md:mx-auto md:inset-x-1/2">
                <h3 className="text-base text-primaryColor">QUICK LINKS</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {footer.solutions.map((item: any, i: any) => (
                    <li key={i}>
                      <a
                        href={item.href}
                        className="text-base text-secondaryColor hover:text-primaryColor "
                      >
                        <div className="flex items-center">
                          <img
                            src="images/Footer/FooterListIcon.svg"
                            alt="Footer List Icon"
                            className="w-4 h-4 mr-3"
                          />
                          <div className="w-full break-words">{item.name}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* footer contectus */}
              <div className="md:mt-0">
                <h3 className="text-base text-primaryColor">CONTACT US</h3>
                <ul role="list" className="pr-2 mt-4 space-y-4">
                  <li>
                    <div className="flex items-center w-full">
                      <img
                        src="images/NavBar/phoneicon.svg"
                        alt="Phone Icon"
                        className="w-6 h-6 mr-3"
                      />
                      <a
                        href={`tel:${companyInfo?.company_phone}`} 
                        className="text-base text-secondaryColor hover:text-primaryColor "
                      >
                       +91 {companyInfo?.company_phone}
                      </a>
                    </div>
                  </li>
                </ul>

                <ul role="list" className="pr-2 mt-4 space-y-4">
                  <li>
                    <div className="flex items-center w-full">
                      <img
                        src="images/Footer/FooterEmailIcon.svg"
                        alt="Footer Email Icon"
                        className="w-6 h-6 mr-3"
                      />
                      <div className="w-full break-all">
                        <a
                          href={`mailto:${companyInfo?.company_email}`}
                          className="text-base text-secondaryColor hover:text-primaryColor "
                        >
                          {companyInfo?.company_email}
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul role="list" className="pr-2 mt-4 space-y-4">
                  <li>
                    <a
                      href=""
                      className="text-base text-secondaryColor hover:text-primaryColor "
                    >
                      <div className="flex items-center w-full">
                        <img
                          src="images/Footer/FooterLocationIcon.svg"
                          alt="Footer Location Icon"
                          className="w-6 h-6 mr-3"
                        />
                        <div className="w-full break-all">
                          {companyInfo?.address}
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="px-4 py-5 border-t border-gray-200 sm:px-6 lg:px-20 md:flex md:items-center md:justify-between">
            <div className="flex space-x-4 md:order-2">
              <div className="hidden grid-cols-4 gap-3 px-4 md:grid">
                <a
                  href={`${companyInfo?.facebook_link}`}
                  className="inline-flex items-center p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-secondaryColor hover:border-transparent hover:bg-primaryColor"
                >
                  <img
                    src="images/NavBar/facebookIcon.svg"
                    alt="Facebook Icon"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href={`${companyInfo?.twitter_link}`}
                  className="inline-flex items-center p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-secondaryColor hover:border-transparent hover:bg-primaryColor"
                >
                  <img
                    src="images/NavBar/twitterIcon.svg"
                    alt="Twitter Icon"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href={`${companyInfo?.youtube_link}`}
                  className="inline-flex items-center p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-secondaryColor hover:border-transparent hover:bg-primaryColor"
                >
                  <img
                    src="images/NavBar/youTubeIcon.svg"
                    alt="You Tube Icon"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href={`${companyInfo?.insta_link}`}
                  className="inline-flex items-center p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-secondaryColor hover:border-transparent hover:bg-primaryColor"
                >
                  <img
                    src="images/NavBar/instagramIcon.svg"
                    alt="Instagram Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>
            <div className="mt-4 text-semibold text-secondaryColor md:order-1 md:mt-0">
              {companyInfo?.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
