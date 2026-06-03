import React, { useState, useEffect } from 'react'
import Services from './Services'
import BookingForm from './BookingForm'
import Success from './Success'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState([])
  const [bookingData, setBookingData] = useState(null)
  const [initData, setInitData] = useState(null)

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp
      webApp.ready()
      webApp.expand()
      setInitData(webApp.initDataUnsafe)
    }
  }, [])

  const handleServicesNext = (services) => {
    setSelectedServices(services)
    setStep(2)
  }

  const handleBookingSubmit = (data) => {
    setBookingData(data)
    setStep(3)
    sendNotifications(data, selectedServices)
  }

  const sendNotifications = async (booking, services) => {
    const total = services.reduce((sum, s) => sum + s.price, 0);
    
    try {
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: booking.name,
          phone: booking.phone,
          date: booking.date,
          time: booking.time,
          services: services,
          total: total
        })
      });
      
      if (response.ok) {
        console.log('Уведомления отправлены');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="app">
      {step === 1 && <Services onNext={handleServicesNext} />}
      {step === 2 && <BookingForm onSubmit={handleBookingSubmit} services={selectedServices} />}
      {step === 3 && <Success />}
    </div>
  )
}

export default App