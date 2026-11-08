const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const data = {
  coffee: [
    { name: 'Türk Kahvesi', price: '₺150', description: '' },
    { name: 'Americano', price: '₺150', description: '' },
    { name: 'Cappucino', price: '₺150', description: '' },
    { name: 'Latte', price: '₺150', description: '' },
    { name: 'Çay', price: '₺50', description: '' },
    { name: 'Menengiç Kahvesi', price: '₺150', description: '' },
    { name: 'Dibek Kahvesi', price: '₺150', description: '' },
    { name: 'Salep', price: '₺200', description: '' },
    { name: 'Sıcak Çikolata', price: '₺150', description: '' }
  ],

  cold_coffee: [
    { name: 'Iced Americano', price: '₺150', description: '' },
    { name: 'Iced Latte', price: '₺175', description: '' },
    { name: 'Iced Karamel Latte', price: '₺200', description: '' },
    { name: 'Churchill', price: '₺200', description: '' },
    { name: 'Limonata', price: '₺200', description: '' },
    { name: 'Portakal Suyu', price: '₺200', description: '' },
    { name: 'Soğuk Çay Çeşitleri', price: '₺85', description: '' },
    { name: 'Muzlu Milkshake', price: '₺200', description: '' },
    { name: 'Cicibebe Milkshake', price: '₺200', description: '' },
    { name: 'Dondurmalı Milkshake', price: '₺300', description: '' }
  ],

  dessert: [
    {
      name: 'Salata Çeşitleri',
      price: '₺150',
      description: 'Taze ve hafif alternatifler.'
    },
    {
      name: 'İçecekler',
      price: 'Fiyat sorunuz',
      description: 'Yemeğinize ve kahvenize eşlik eden seçenekler.'
    },
    {
      name: 'Atıştırmalıklar',
      price: 'Fiyat sorunuz',
      description: 'Günün her saatine uygun.'
    }
  ]
};

const tabs = document.querySelectorAll('.tab');
const menuItems = document.querySelector('#menu-items');

function showCategory(tab) {
  tabs.forEach((item) => {
    item.classList.toggle('active', item === tab);
  });

  const items = data[tab.dataset.category] || [];

  if (!menuItems) return;

  menuItems.innerHTML = items.map((item, index) => {
    const description = item.description?.trim()
      ? `<p>${item.description}</p>`
      : '';

    return `
      <article class="menu-card">
        <span class="menu-number">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3>${item.name}</h3>
          ${description}
        </div>
        <span class="price">${item.price || 'Fiyat sorunuz'}</span>
      </article>
    `;
  }).join('');
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => showCategory(tab));
});

const initialTab = document.querySelector('.tab.active') || tabs[0];
if (initialTab) {
  showCategory(initialTab);
}

document.querySelectorAll('#year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('#year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
