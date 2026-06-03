import React, { useEffect } from 'react'

function Success() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.close()
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="success">
      <div className="success-icon">✅</div>
      <h1>Запись отправлена!</h1>
      <p>Мы свяжемся с вами в ближайшее время</p>
      <button onClick={() => window.Telegram?.WebApp?.close()}>
        Закрыть
      </button>
    </div>
  )
}

export default Success