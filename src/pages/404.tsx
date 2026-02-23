/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'

const NotFoundPage = () => {
  const route = useRouter()

  setTimeout(() => {
    route.push('/')
  }, 5000)

  return (
    <div>
      <div className="py-14 md:py-20 lg:py-24 xl:py-28 bg-neutral-700">
        <div className="flex flex-col items-center justify-center pt-10 md:pt-16 lg:pt-20 px-4 ">
          <img
            src="/404-new.png"
            alt="404 not found"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-full"
          />
          <a
            href={'/'}
            className="relative inline-flex items-center justify-start px-4  py-2 overflow-hidden transition-all bg-transparent border-2 border-l-8 btn border-primaryColor hover:bg-transparent group mt-8 md:mt-10 lg:mt-12 xl:mt-14"
          >
            <span className="absolute left-0 w-0 h-full transition-all duration-1000 ease-in-out bg-primaryColor group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="z-10 w-full transition duration-1000 ease-in-out text-white font-medium group-hover:text-secondaryColor">
              Home Page
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
