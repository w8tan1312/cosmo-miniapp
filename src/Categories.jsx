import React from 'react'

const categories = [
  { 
    id: 1, 
    name: 'Губы', 
    icon: 'fa-lips', 
    color: '#ff6b9d',
    bgImage: 'https://cdn.pixabay.com/photo/2020/07/08/08/29/lips-5381882_640.png', // картинка губ
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
    color: '#4c9aff',
    bgImage: 'https://cdn.pixabay.com/photo/2017/01/06/20/18/face-1958795_640.png',
    services: [
      { id: 21, name: 'Чистка лица', price: 3500, duration: '60 мин' },
      { id: 22, name: 'Массаж лица', price: 2500, duration: '45 мин' }
    ]
  },
  { 
    id: 3, 
    name: 'Препараты', 
    icon: 'fa-syringe', 
    color: '#34c759',
    bgImage: 'https://cdn.pixabay.com/photo/2020/02/02/21/14/bottle-4813590_640.png',
    services: [
      { id: 31, name: 'Ботокс', price: 12000, duration: '30 мин' },
      { id: 32, name: 'Биоревитализация', price: 9000, duration: '45 мин' }
    ]
  },
  { 
    id: 4, 
    name: 'Тело', 
    icon: 'fa-spa', 
    color: '#af52de',
    bgImage: 'https://cdn.pixabay.com/photo/2018/03/05/18/53/spa-3201457_640.png',
    services: [
      { id: 41, name: 'Антицеллюлитный массаж', price: 4000, duration: '60 мин' }
    ]
  },
  { 
    id: 5, 
    name: 'Волосы', 
    icon: 'fa-hand-peace', 
    color: '#ff9500',
    bgImage: 'https://cdn.pixabay.com/photo/2016/03/31/21/14/comb-1296650_640.png',
    services: [
      { id: 51, name: 'Ламинирование', price: 5000, duration: '60 мин' }
    ]
  },
  { 
    id: 6, 
    name: 'Цветы и ароматы', 
    icon: 'fa-flower', 
    color: '#e84393',
    bgImage: 'https://cdn.pixabay.com/photo/2020/01/09/16/31/vase-4754126_640.png', // ваза с цветами
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
            style={{ 
              backgroundImage: `linear-gradient(135deg, ${cat.color}dd, ${cat.color}99), url(${cat.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onClick={() => onSelectCategory(cat)}
          >
            <i className={`fas ${cat.icon}`} style={{ color: 'white', fontSize: '48px' }}></i>
            <h3 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories