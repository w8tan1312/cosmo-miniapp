import React, { useEffect, useState } from 'react'

const Butterflies = () => {
  const [butterflies, setButterflies] = useState([])

  useEffect(() => {
    // Создаём 8 бабочек
    const newButterflies = []
    for (let i = 0; i < 8; i++) {
      newButterflies.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 7,
        size: 20 + Math.random() * 15
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
            fontSize: `${butterfly.size}px`
          }}
        >
          🦋
        </div>
      ))}
    </div>
  )
}

export default Butterflies