import Link from 'next/link'
import React, { MouseEventHandler } from 'react'

interface Buttons {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
  ButtonName1?: string
  Button1?: boolean
  ButtonName2?: string
  Button2?: boolean
  isSubmit?: boolean
}

const MainButton = (props: Buttons) => {
  return (
    <div>
      {props.Button1 === true && (
        <button className="relative inline-flex items-center justify-start px-3 py-1.5 overflow-hidden transition-all bg-transparent border-2 border-l-8 anybody md:px-6 btn border-primaryColor hover:bg-transparent group">
          {/* purple box */}
          <span className="absolute left-0 w-0 h-full transition-all duration-1000 ease-in-out bg-primaryColor group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="z-10 w-full text-xs transition duration-1000 ease-in-out md:text-lg text-secondaryColor group-hover:text-secondaryColor">
            {props.ButtonName1}
          </span>
        </button>
      )}

      {props.Button2 === true && (
        props.isSubmit ? (
          <button
            type="submit"
            onClick={props.onClick}
            className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden transition-all bg-transparent border-2 border-l-8 anybody btn border-primaryColor hover:bg-transparent group"
          >
            {/* purple box */}
            <span className="absolute left-0 w-0 h-full transition-all duration-1000 ease-in-out bg-primaryColor group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="z-10 w-full transition duration-1000 ease-in-out md:font-semibold text-primaryColor group-hover:text-secondaryColor">
              {props.ButtonName2}
            </span>
          </button>
        ) : (
          <Link href="/about-us" passHref>
            <button
              type="button"
              onClick={props.onClick}
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden transition-all bg-transparent border-2 border-l-8 anybody btn border-primaryColor hover:bg-transparent group"
            >
              {/* purple box */}
              <span className="absolute left-0 w-0 h-full transition-all duration-1000 ease-in-out bg-primaryColor group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="z-10 w-full transition duration-1000 ease-in-out md:font-semibold text-primaryColor group-hover:text-secondaryColor">
                {props.ButtonName2}
              </span>
            </button>
          </Link>
        )
      )}
    </div>
  )
}

export default MainButton
