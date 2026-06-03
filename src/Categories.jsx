import React from 'react'

const categories = [
  { 
    id: 1, 
    name: 'Увеличение губ', 
    icon: 'fa-lips', 
    color: '#ff69b4',
    emoji: '💋',
    services: [
      { id: 11, name: 'Контур губ', price: 8000, duration: '30 мин' },
      { id: 12, name: 'Биоревитализация губ', price: 12000, duration: '45 мин' },
      { id: 13, name: 'Увеличение гиалуроновой кислотой', price: 15000, duration: '40 мин' },
      { id: 14, name: 'Коррекция формы губ', price: 10000, duration: '35 мин' }
    ]
  },
  { 
    id: 2, 
    name: 'Ботокс', 
    icon: 'fa-syringe', 
    color: '#ff85b3',
    emoji: '💉',
    services: [
      { id: 21, name: 'Ботокс лба', price: 8000, duration: '20 мин' },
      { id: 22, name: 'Ботокс межбровья', price: 7000, duration: '20 мин' },
      { id: 23, name: 'Ботокс вокруг глаз', price: 9000, duration: '25 мин' },
      { id: 24, name: 'Комплексный ботокс', price: 20000, duration: '45 мин' }
    ]
  },
  { 
    id: 3, 
    name: 'Биоревитализация', 
    icon: 'fa-droplet', 
    color: '#ff77aa',
    emoji: '💎',
    services: [
      { id: 31, name: 'Биоревитализация лица', price: 12000, duration: '45 мин' },
      { id: 32, name: 'Биоревитализация шеи', price: 10000, duration: '40 мин' },
      { id: 33, name: 'Биоревитализация декольте', price: 11000, duration: '40 мин' }
    ]
  },
  { 
    id: 4, 
    name: 'Аппаратная косметология', 
    icon: 'fa-microchip', 
    color: '#ff99cc',
    emoji: '⚙️',
    services: [
      { id: 41, name: 'RF-лифтинг', price: 5000, duration: '60 мин' },
      { id: 42, name: 'Ультразвуковая чистка', price: 4000, duration: '50 мин' },
      { id: 43, name: 'Микротоки', price: 3500, duration: '45 мин' },
      { id: 44, name: 'Лазерная шлифовка', price: 8000, duration: '40 мин' }
    ]
  },
  { 
    id: 5, 
    name: 'Чистка лица', 
    icon: 'fa-face-smile', 
    color: '#ff88bb',
    emoji: '✨',
    services: [
      { id: 51, name: 'Механическая чистка', price: 3500, duration: '60 мин' },
      { id: 52, name: 'Ультразвуковая чистка', price: 4000, duration: '50 мин' },
      { id: 53, name: 'Атравматическая чистка', price: 4500, duration: '55 мин' },
      { id: 54, name: 'Комбинированная чистка', price: 5000, duration: '70 мин' }
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