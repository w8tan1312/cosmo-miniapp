import React, { useEffect, useState } from 'react'

const Butterflies = () => {
  const [butterflies, setButterflies] = useState([])

  useEffect(() => {
    // Создаём бабочек
    const newButterflies = []
    for (let i = 0; i < 6; i++) {
      newButterflies.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 10,
        size: 22 + Math.random() * 15
      })
    }
    setButterflies(newButterflies)
  }, [])

  return (
    <div className="butterflies-container">
      {butterflies.map(butterfly => (
        <div
          key={butterfly.id}
          className="butterfly"
          style={{
            left: `${butterfly.left}%`,
            top: `${butterfly.top}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`,
            '--butterfly-size': `${butterfly.size}px`
          }}
        >
          <div className="butterfly-wing wing-left">
            <div className="wing-top"></div>
            <div className="wing-bottom"></div>
          </div>
          <div className="butterfly-wing wing-right">
            <div className="wing-top"></div>
            <div className="wing-bottom"></div>
          </div>
          <div className="butterfly-body"></div>
        </div>
      ))}
    </div>
  )
}

export default Butterflies