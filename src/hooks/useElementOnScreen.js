import { useEffect, useRef, useState } from "react"

export const useElementOnScreen = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options)
      const currentRef = containerRef.current
      if (currentRef) observer.observe(currentRef)

      return () => {
        if(currentRef) observer.unobserve(currentRef)
      }
    }, [containerRef, options])

    return [containerRef, isVisible]
    
}