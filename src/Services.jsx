import React, { useState } from 'react'

const servicesData = [
  { id: 1, name: 'Чистка лица', price: 2500, duration: '60 мин' },
  { id: 2, name: 'Массаж лица', price: 2000, duration: '45 мин' },
  { id: 3, name: 'Пилинг', price: 3000, duration: '50 мин' },
  { id: 4, name: 'Уход за кожей', price: 3500, duration: '90 мин' },
  { id: 5, name: 'Биоревитализация', price: 5000, duration: '30 мин' },
]

function Services({ onNext }) {
  const [selected, setSelected] = useState([])

  const toggleService = (service) => {
    if (selected.find(s => s.id === service.id)) {
      setSelected(selected.filter(s => s.id !== service.id))
    } else {
      setSelected([...selected, service])
    }
  }

  const total = selected.reduce((sum, s) => sum + s.price, 0)

  return (
    <div className="services">
      <h1>Выберите услуги</h1>
      <div className="services-list">
        {servicesData.map(service => (
          <div 
            key={service.id} 
            className={`service-card ${selected.find(s => s.id === service.id) ? 'selected' : ''}`}
            onClick={() => toggleService(service)}
          >
            <h3>{service.name}</h3>
            <p>{service.duration}</p>
            <p className="price">{service.price} ₽</p>
          </div>
        ))}
      </div>
      {selected.length > 0 && (
        <div className="footer">
          <div className="total">Итого: {total} ₽</div>
          <button onClick={() => onNext(selected)}>Далее</button>
        </div>
      )}
    </div>
  )
}

export default Services