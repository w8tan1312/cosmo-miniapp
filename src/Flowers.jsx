import React, { useEffect, useState } from 'react'

const Flowers = () => {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    const flowerEmojis = ['🌸', '🌺', '🌷', '🌼', '🌻', '🌹', '🥀', '💐', '🌸', '🌺']
    const newFlowers = []
    for (let i = 0; i < 12; i++) {
      newFlowers.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 20 + Math.random() * 15,
        size: 20 + Math.random() * 15,
        emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)]
      })
    }
    setFlowers(newFlowers)
  }, [])

  return (
    <div className="flowers-container">
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="flower"
          style={{
            left: `${flower.left}%`,
            top: `${flower.top}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            fontSize: `${flower.size}px`,
            opacity: 0.4
          }}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  )
}

export default Flowers