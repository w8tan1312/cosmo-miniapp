import React, { useState, useEffect } from 'react'
import Categories from './Categories'
import CategoryServices from './CategoryServices'
import BookingForm from './BookingForm'
import Success from './Success'
import Flowers from './Flowers'
import './App.css'

function App() {
  const [step, setStep] = useState('categories')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
    }
  }, [])

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    setStep('services')
  }

  const handleAddToCart = (services) => {
    const newCart = [...cart]
    services.forEach(service => {
      if (!newCart.find(s => s.id === service.id)) {
        newCart.push(service)
      }
    })
    setCart(newCart)
    setStep('booking')
  }

  const handleBackToCategories = () => {
    setStep('categories')
    setSelectedCategory(null)
  }

  const handleBookingSubmit = async (bookingData) => {
    setStep('success')
    await sendNotifications(bookingData, cart)
  }

  const sendNotifications = async (booking, services) => {
    const total = services.reduce((sum, s) => sum + s.price, 0)
    
    try {
      await fetch('/api/send-notification', {
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
      })
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  const totalCart = cart.reduce((sum, s) => sum + s.price, 0)

  return (
    <div className="app">
      <Flowers />
      {step === 'categories' && (
        <Categories onSelectCategory={handleSelectCategory} />
      )}
      
      {step === 'services' && selectedCategory && (
        <CategoryServices 
          category={selectedCategory}
          onAddToCart={handleAddToCart}
          onBack={handleBackToCategories}
          existingSelected={cart}
        />
      )}
      
      {step === 'booking' && (
        <>
          <BookingForm onSubmit={handleBookingSubmit} services={cart} />
          <div className="cart-preview">
            <h4>Ваши услуги ({cart.length})</h4>
            {cart.map(s => (
              <div key={s.id}>{s.name} - {s.price}₽</div>
            ))}
            <strong>Итого: {totalCart} ₽</strong>
          </div>
        </>
      )}
      
      {step === 'success' && <Success />}
    </div>
  )
}

export default App