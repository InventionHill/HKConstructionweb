import React from 'react'

const BannerOtherPage = (props: any) => {
  return (
    <div className="anybody">
      <div className="relative">
        <img src={props.ImgSrc} alt="" className='w-full'/>
        <div className="absolute md:space-y-5 left-10 md:left-20 lg:left-48 inset-y-1/2 my-4">
          <p className="font-semibold md:text-5xl text-secondaryColor text-xs">
            {props.hedging}
          </p>
          <p className="text-[8px] md:text-xl text-secondaryColor">
            Home - <span className="text-primaryColor">{props.PageName}</span>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerOtherPage
