import React, { useState } from 'react'

function BookingForm({ onSubmit, services }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h1>Заполните данные</h1>
      
      <input
        type="text"
        name="name"
        placeholder="👤 Ваше имя"
        value={formData.name}
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="📞 Телефон"
        value={formData.phone}
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Записаться ✨
      </button>
    </form>
  )
}

export default BookingForm