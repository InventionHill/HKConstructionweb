/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useCompanyInfo } from '../../framework/basic-react/auth/company'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const route = useRouter()

  const [logo, setLogo] = useState(false)
  const [currentPath, setCurrentPath] = React.useState(route.pathname)

  const { data } = useCompanyInfo()
  const { companyInfo, updateCompnyInfo } = useContext(CompanyInfoContext)

  useEffect(() => {
    if (data !== undefined) {
      updateCompnyInfo(data)
    }
  }, [data, updateCompnyInfo])

  const handelScroll = () => {
    if (window.scrollY > 64) {
      setLogo(true)
    } else if (window.scrollY < 64) {
      setLogo(false)
    }
  }

  const handleHeaderMenu = (path: string) => {
    route.push(path)
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handelScroll)
    }

    const handleRouteChange = (url: string) => {
      setCurrentPath(url)
    }

    route.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      window.removeEventListener('scroll', handelScroll)
      route.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [route])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href =
      process.env.NEXT_PUBLIC_IMG_ENDPOINT + companyInfo?.brochure_path
    link.setAttribute('download', 'HKConstruction.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navigation = [
    { name: 'Home', href: '/', current: currentPath === '/' },
    {
      name: 'About Us ',
      href: '/about-us',
      current: currentPath === '/about-us',
    },
    {
      name: 'Why Us',
      href: '/why-us',
      current: currentPath === '/why-us',
    },
    {
      name: 'Our Projects',
      href: '/our-projects',
      current: currentPath === '/our-projects',
    },
    {
      name: 'Contact Us',
      href: '/contact-us',
      current: currentPath === '/contact-us',
    },
    {
      name: 'Career',
      href: '/career',
      current: currentPath === '/career',
    },
  ]

  return (
    <div className="fixed z-20 w-full anybody">
      {/* top header */}
      {logo === false && (
        <header className="">
          <div className="bg-transparent md:border-b md:border-gray-50 md:border-opacity-10">
            <div className="flex items-center justify-between py-4 mx-2 lg:mx-16">
              <div className="right-0 items-center hidden ml-auto lg:mx-auto md:flex">
                <img src="images\NavBar\emailicon.svg" alt="Email Icon" />

                <div className="ml-2 text-base text-secondaryColor">
                  <a
                    href={`mailto:${companyInfo?.company_email}`}
                    className="text-base text-secondaryColor hover:text-primaryColor "
                  >
                    {companyInfo?.company_email}
                  </a>
                </div>
              </div>

              <div className="right-0 items-center hidden ml-auto divide-x md:flex md:ml-0">
                <div className="right-0 flex items-center px-3 ml-auto md:px-4">
                  <img src="images\NavBar\phoneicon.svg" alt="Phone Icon" />
                  <div className="ml-2 text-base text-secondaryColor">
                    <a
                      href={`tel:${companyInfo?.company_phone}`}
                      className="text-base text-secondaryColor hover:text-primaryColor "
                    >
                      +91 {companyInfo?.company_phone}
                    </a>
                  </div>
                </div>

                {/* socialMedia Link */}
                <div className="flex items-center mr-6">
                  <div className="hidden grid-cols-4 gap-3 px-4 md:grid">
                    <a
                      href={`${companyInfo?.facebook_link}`}
                      className="inline-flex items-center p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-secondaryColor hover:border-transparent hover:bg-primaryColor"
                    >
                      <img
                        alt="Facebook Icon"
                        src="images/NavBar/facebookIcon.svg"
                        className="w-4 h-4"
                      />
                    </a>
                    <a
                      href={`${companyInfo?.twitter_link}`}
                      className="inline-flex items-center p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-secondaryColor hover:border-transparent hover:bg-primaryColor"
                    >
                      <img
                        alt="Twitter Icon"
                        src="images/NavBar/twitterIcon.svg"
                        className="w-4 h-4"
                      />
                    </a>
                    <a
                      href={`${companyInfo?.youtube_link}`}
                      className="inline-flex items-center p-2 text-white bg-transparent border-2 rounded-full shadow-sm border-secondaryColor hover:border-transparent hover:bg-primaryColor"
                    >
                      <img
                        alt="YouTube Icon"
                        src="images/NavBar/youTubeIcon.svg"
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
              </div>
            </div>
          </div>
        </header>
      )}

      <div className="">
        <div className="sticky top-0 drop-shadow">
          <Disclosure
            as="nav"
            className={`${logo === true
              ? 'bg-black backdrop-blur-md bg-black/60'
              : 'bg-transparent'
              }`}
          >
            {({ open }) => (
              <>
                <div className="w-full px-2 py-1 sm:px-6 lg:px-24">
                  <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block w-6 h-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block w-6 h-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>

                    <Link href="/" passHref>
                      <a className="flex items-center flex-shrink-0">
                        {logo === false ? (
                          <img
                            className="relative block h-12 w-30 md:w-auto"
                            src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.logo_black_image_path}`}
                            alt="Your Company"
                          />
                        ) : (
                          <img
                            className="relative block h-12 w-30 md:w-auto"
                            src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.logo_black_image_path}`}
                            alt="Your Company"
                          />
                        )}
                      </a>
                    </Link>

                    <div className="flex items-center justify-center mx-auto sm:items-stretch sm:justify-start">
                      <div className="hidden sm:ml-6 xl:block ">
                        <div className="flex justify-center mx-auto space-x-4 ">
                          {navigation.map((item: any, i: any) => (
                            <button
                              onClick={() => handleHeaderMenu(item.href)}
                              key={i}
                              className={classNames(
                                item.current
                                  ? ' text-primaryColor'
                                  : 'text-secondaryColor hover:text-primaryColor',
                                ' rounded-md px-3 py-2 text-sm',
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="inset-y-0 right-0 items-center hidden pr-0 sm:static sm:inset-auto sm:ml-6 xl:flex">
                      <button
                        type="button"
                        className="relative hidden p-2 mx-6 text-gray-400 rounded-full md:block bg-secondaryColor hover:text-white hover:bg-primaryColor"
                        onClick={handleDownload}
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Download PDF</span>
                        <img
                          src="images\NavBar\PdfIcon.svg.svg"
                          alt="Pdf Icon"
                          className="w-6 h-6"
                        />
                      </button>

                      <div className="hidden md:block">
                        <Link href="/contact-us" passHref>
                          <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden transition-all bg-transparent border-2 border-l-8 btn border-primaryColor hover:bg-transparent group">
                            {/* purple box */}
                            <span className="absolute left-0 w-0 h-full transition-all duration-1000 ease-in-out bg-primaryColor group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="z-10 w-full transition duration-1000 ease-in-out text-secondaryColor group-hover:text-secondaryColor">
                              Get In Touch
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="px-2 pt-2 pb-3 mx-2 space-y-0 bg-black rounded md:bg-transparent md:text-center">
                    {navigation.map((item: any, i: any) => (
                      <Disclosure.Button
                        key={i}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-primaryColor'
                            : 'text-secondaryColor hover:text-primaryColor',
                          'block sm:inline-block rounded-md px-3 py-2 text-sm',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  )
}
export default NavBar
