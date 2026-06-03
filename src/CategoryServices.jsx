import React, { useState } from 'react'

function CategoryServices({ category, onAddToCart, onBack, existingSelected }) {
  const [selectedServices, setSelectedServices] = useState(existingSelected || [])

  const toggleService = (service) => {
    if (selectedServices.find(s => s.id === service.id)) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const total = selectedServices.reduce((sum, s) => sum + s.price, 0)

  return (
    <div className="category-services">
      <button className="back-btn" onClick={onBack}>
        <i className="fas fa-arrow-left"></i> Назад
      </button>
      
      <h1>{category.name}</h1>
      <p className="category-desc">Выберите услуги из этой категории</p>

      <div className="services-list">
        {category.services.map(service => (
          <div 
            key={service.id} 
            className={`service-card ${selectedServices.find(s => s.id === service.id) ? 'selected' : ''}`}
            onClick={() => toggleService(service)}
          >
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.duration}</p>
            </div>
            <div className="service-price">
              {service.price} ₽
              {selectedServices.find(s => s.id === service.id) && (
                <i className="fas fa-check-circle"></i>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedServices.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <i className="fas fa-shopping-cart"></i>
            <span>Выбрано: {selectedServices.length} услуг</span>
            <span>Итого: {total} ₽</span>
          </div>
          <button onClick={() => onAddToCart(selectedServices)}>
            Добавить в корзину <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default CategoryServices