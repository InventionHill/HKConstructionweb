import React, { useEffect, useState } from 'react'

interface CounterType {
  id: string
  count: number
  title: string
}

interface CountersType {
  Scroll?: number
  CounterData?: CounterType[]
}

const CountersSection: React.FC<CountersType> = (props) => {
  const [divShow, setDivShow] = useState(false)
  const [count, setCount] = useState<{ [key: string]: number }>({})

  const setCounterValue = (id: string, max: number) => {
    setCount((prevCounts) => ({ ...prevCounts, [id]: 0 }))

    const duration = 1500 // 1.5 seconds fixed maximum duration
    const intervalTime = 30 // Update every 30ms

    // Calculate total steps based on duration and interval
    const totalSteps = Math.floor(duration / intervalTime)

    // Automatically adjust the increment step based on the target number
    const stepValue = max / totalSteps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++

      if (currentStep >= totalSteps) {
        clearInterval(interval)
        setCount((prevCounts) => ({ ...prevCounts, [id]: max }))
      } else {
        // Smoothly and dynamically track the gap step calculation
        setCount((prevCounts) => ({ ...prevCounts, [id]: Math.round(currentStep * stepValue) }))
      }
    }, intervalTime)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (props.Scroll || 0)) {
        setDivShow(true)
      } else {
        setDivShow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [props.Scroll])

  useEffect(() => {
    if (divShow && props.CounterData) {
      props.CounterData.forEach((item) => {
        setCounterValue(item.id, item.count)
      })
    }
  }, [divShow, props.CounterData])

  const formatCount = (value: number | undefined): string => {
    if (value === undefined) return ''

    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M'
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K'
    } else {
      return value.toString()
    }
  }

  return (
    <div>
      {divShow && (
        <div className="mx-6 md:mx-10 lg:mx-16 xl:mx-24">
          <div className="bg-center bg-cover bg-[url('/images/HomePage/counter.png')] grid items-center w-full grid-cols-1 gap-5 px-8 py-10 rounded-lg md:grid-cols-2 lg:grid-cols-4 bg-slate-700">
            {props?.CounterData?.map((item) => (
              <div
                className="z-10 flex items-center bg-transparent border w-7 border-primaryColor hover:bg-primaryColor"
                key={item.id}
              >
                <div className="ml-1 mr-4 font-extrabold text-[40px] text-secondaryColor">
                  {formatCount(count[item.id])}
                </div>
                <div className="text-base text-secondaryColor">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CountersSection
