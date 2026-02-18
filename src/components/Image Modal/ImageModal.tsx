import React, { useState } from 'react'

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrl.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1,
    )
  }

  if (!isOpen) return null

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
          <div className="relative bg-white p-4 rounded-lg overflow-auto">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6 text-gray-600 bg-black bg-opacity-15 rounded"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                src={imageUrl?.length === 1 ? `${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${imageUrl  }` : `${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${imageUrl[currentImageIndex]}`}
                alt="Large view"
                className="w-[750px] lg:h-[500px] h-[200px] md:h-[500px] object-contain"
              />
              {imageUrl.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="h-10 w-10 absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-80 p-2 rounded"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="h-10 w-10 absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-80 p-2 rounded"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageModal
