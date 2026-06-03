import React from 'react'

const categories = [
  { 
    id: 1, 
    name: 'Губы', 
    icon: 'fa-lips', 
    color: '#ff69b4',
    emoji: '💋',
    services: [
      { id: 11, name: 'Контур губ', price: 8000, duration: '30 мин' },
      { id: 12, name: 'Биоревитализация губ', price: 12000, duration: '45 мин' },
      { id: 13, name: 'Увеличение губ', price: 15000, duration: '40 мин' }
    ]
  },
  { 
    id: 2, 
    name: 'Лицо', 
    icon: 'fa-face-smile', 
    color: '#ff85b3',
    emoji: '✨',
    services: [
      { id: 21, name: 'Чистка лица', price: 3500, duration: '60 мин' },
      { id: 22, name: 'Массаж лица', price: 2500, duration: '45 мин' }
    ]
  },
  { 
    id: 3, 
    name: 'Препараты', 
    icon: 'fa-syringe', 
    color: '#ff77aa',
    emoji: '💎',
    services: [
      { id: 31, name: 'Ботокс', price: 12000, duration: '30 мин' },
      { id: 32, name: 'Биоревитализация', price: 9000, duration: '45 мин' }
    ]
  },
  { 
    id: 4, 
    name: 'Тело', 
    icon: 'fa-spa', 
    color: '#ff99cc',
    emoji: '🌸',
    services: [
      { id: 41, name: 'Антицеллюлитный массаж', price: 4000, duration: '60 мин' }
    ]
  },
  { 
    id: 5, 
    name: 'Волосы', 
    icon: 'fa-hand-peace', 
    color: '#ff88bb',
    emoji: '💫',
    services: [
      { id: 51, name: 'Ламинирование', price: 5000, duration: '60 мин' }
    ]
  },
  { 
    id: 6, 
    name: 'Ароматерапия', 
    icon: 'fa-flower', 
    color: '#ffb6d9',
    emoji: '🌺',
    services: [
      { id: 61, name: 'Ароматерапия', price: 1500, duration: '30 мин' },
      { id: 62, name: 'Фитокомплексы', price: 2000, duration: '20 мин' }
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
            onClick={() => onSelectCategory(cat)}
          >
            <div className="bg-emoji">{cat.emoji}</div>
            <i className={`fas ${cat.icon}`} style={{ color: cat.color }}></i>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories