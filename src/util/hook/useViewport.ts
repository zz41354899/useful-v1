import { Device } from '@/type/enum.type'
import { useState, useEffect } from 'react'

const useViewport = (debounceDelay = 100) => {
  const [viewportWidth, setViewportWidth] = useState<number>(0)
  const [viewportHeight, setViewportHeight] = useState<number>(0)

  const handleViewport = () => {
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleViewport, debounceDelay)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [debounceDelay])

  return {
    width: viewportWidth,
    height: viewportHeight,
    device: viewportWidth > 640 ? Device.laptop : Device.mobile,
  }
}

export default useViewport
