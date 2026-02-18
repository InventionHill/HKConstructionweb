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

    const step = Math.max(1, Math.floor(max / 100))
    const interval = setInterval(() => {
      setCount((prevCounts) => {
        if (prevCounts[id] + step >= max) {
          clearInterval(interval)
          return { ...prevCounts, [id]: max }
        }
        return { ...prevCounts, [id]: prevCounts[id] + step }
      })
    }, 50)
  }

  const handleScroll = () => {
    if (window.scrollY > (props.Scroll || 0)) {
      setDivShow(true)
    } else {
      setDivShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
        <div className="mx-6 my-8 lg:mx-12 my-10">
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
