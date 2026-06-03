import React, { useEffect, useState } from 'react'

const Butterflies = () => {
  const [butterflies, setButterflies] = useState([])

  useEffect(() => {
    const newButterflies = []
    for (let i = 0; i < 6; i++) {
      newButterflies.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 25 + Math.random() * 15,
        size: 35 + Math.random() * 20
      })
    }
    setButterflies(newButterflies)
  }, [])

  return (
    <div className="butterflies-container">
      {butterflies.map(butterfly => (
        <div
          key={butterfly.id}
          className="butterfly-wrapper"
          style={{
            left: `${butterfly.left}%`,
            top: `${butterfly.top}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`,
          }}
        >
          <div 
            className="butterfly-real" 
            style={{
              '--size': `${butterfly.size}px`
            }}
          >
            <div className="wing-left-real">
              <div className="wing-upper-left"></div>
              <div className="wing-lower-left"></div>
            </div>
            <div className="wing-right-real">
              <div className="wing-upper-right"></div>
              <div className="wing-lower-right"></div>
            </div>
            <div className="body-real"></div>
            <div className="antenna-left"></div>
            <div className="antenna-right"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Butterflies