import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

function CookieBanner() {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const cookiesAccepted = Cookies.get('cookiesAccepted')
    if (!cookiesAccepted) {
      setShowAlert(true)
    }
  }, [])

  const handleAccept = () => {
    Cookies.set('cookiesAccepted', 'true')
    setShowAlert(false)
  }

  return (
    (showAlert && (
      <div className="fixed bottom-0 p-6 w-full flex justify-center z-[2000]">
        <div className="bg-white bg-opacity-95 text-xs rounded-md fade w-[450px] show">
          <div className="p-4 flex items-center justify-between px-6 rounded border border-primaryColor">
            <p>
              Cookies help us deliver the best experience on our website. By
              using our website, you agree to the use of cookies. Find out how
              we use cookies.{' '}
              <a
                href="/terms-conditions"
                className="underline font-bold text-blue-500 transition-colors duration-300 relative"
              >
                Refer Terms & Conditions
              </a>
            </p>
            <div>
              <button
                type="button"
                className="px-5 py-3 rounded-lg text-white bg-primaryColor ml-1.5 min-w-max"
                onClick={handleAccept}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    )) ||
    null
  )
}

export default CookieBanner
