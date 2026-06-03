import React from 'react'

const categories = [
  { 
    id: 1, 
    name: 'Губы', 
    icon: 'fa-lips', 
    color: '#ff6b9d',
    services: [
      { id: 11, name: 'Контур губ', price: 8000, duration: '30 мин' },
      { id: 12, name: 'Биоревитализация губ', price: 12000, duration: '45 мин' },
      { id: 13, name: 'Увеличение губ', price: 15000, duration: '40 мин' },
      { id: 14, name: 'Коррекция формы губ', price: 10000, duration: '35 мин' }
    ]
  },
  { 
    id: 2, 
    name: 'Лицо', 
    icon: 'fa-face-smile', 
    color: '#4c9aff',
    services: [
      { id: 21, name: 'Чистка лица', price: 3500, duration: '60 мин' },
      { id: 22, name: 'Массаж лица', price: 2500, duration: '45 мин' },
      { id: 23, name: 'Пилинг', price: 4000, duration: '50 мин' },
      { id: 24, name: 'Уход за кожей', price: 4500, duration: '90 мин' }
    ]
  },
  { 
    id: 3, 
    name: 'Препараты', 
    icon: 'fa-syringe', 
    color: '#34c759',
    services: [
      { id: 31, name: 'Ботокс', price: 12000, duration: '30 мин' },
      { id: 32, name: 'Диспорт', price: 11000, duration: '30 мин' },
      { id: 33, name: 'Биоревитализация', price: 9000, duration: '45 мин' }
    ]
  },
  { 
    id: 4, 
    name: 'Тело', 
    icon: 'fa-spa', 
    color: '#af52de',
    services: [
      { id: 41, name: 'Антицеллюлитный массаж', price: 4000, duration: '60 мин' },
      { id: 42, name: 'Обертывание', price: 3500, duration: '50 мин' },
      { id: 43, name: 'LPG массаж', price: 3000, duration: '40 мин' }
    ]
  },
  { 
    id: 5, 
    name: 'Волосы', 
    icon: 'fa-hand-peace', 
    color: '#ff9500',
    services: [
      { id: 51, name: 'Ламинирование', price: 5000, duration: '60 мин' },
      { id: 52, name: 'Ботокс для волос', price: 4500, duration: '50 мин' },
      { id: 53, name: 'Кератиновое выпрямление', price: 7000, duration: '90 мин' }
    ]
  }
]

function Categories({ onSelectCategory }) {
  return (
    <div className="categories">
      <h1>Выберите категорию</h1>
      <div className="categories-grid">
        {categories.map(cat => (
          <div 
            key={cat.id} 
            className="category-card"
            style={{ background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}40)` }}
            onClick={() => onSelectCategory(cat)}
          >
            <i className={`fas ${cat.icon}`} style={{ color: cat.color, fontSize: '48px' }}></i>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories