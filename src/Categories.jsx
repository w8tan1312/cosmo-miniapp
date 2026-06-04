import React from 'react'

const categories = [
  { id: 1, name: 'Увеличение губ', icon: 'fa-lips', services: [ ... ] },
  { id: 2, name: 'Ботокс', icon: 'fa-syringe', services: [ ... ] },
  { id: 3, name: 'Биоревитализация', icon: 'fa-droplet', services: [ ... ] },
  { id: 4, name: 'Аппаратная косметология', icon: 'fa-microchip', services: [ ... ] },
  { id: 5, name: 'Чистка лица', icon: 'fa-face-smile', services: [ ... ] }
]

function Categories({ onSelectCategory }) {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/bogatyreva.amina_', '_blank')
  }

  return (
    <div className="categories">
      <h1>Прайс-лист</h1>
      <div className="categories-grid">
        {categories.map(cat => (
          <div key={cat.id} className="category-card" onClick={() => onSelectCategory(cat)}>
            <div className="icon-simple">
              <i className={`fas ${cat.icon}`}></i>
            </div>
            <h3>{cat.name}</h3>
          </div>
        ))}
        <div className="category-card instagram-card" onClick={handleInstagramClick}>
          <div className="icon-simple">
            <i className="fab fa-instagram"></i>
          </div>
          <h3>Instagram</h3>
        </div>
      </div>
    </div>
  )
}

export default Categories