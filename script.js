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
    { name: 'Türk Kahvesi', price: '₺80', description: '' },
    { name: 'Americano', price: '₺100', description: '' },
    { name: 'Cappucino', price: '₺120', description: '' },
    { name: 'Latte', price: '₺120', description: '' },
    { name: 'Çay', price: '₺40', description: '' },
    { name: 'Menengiç Kahvesi', price: '₺100', description: '' },
    { name: 'Dibek Kahvesi', price: '₺100', description: '' },
    { name: 'Salep', price: '₺110', description: '' },
    { name: 'Sıcak Çikolata', price: '₺120', description: '' }
  ],

  food: [
    {
      name: 'Hünkar Beğendi',
      price: '₺280',
      description: 'Geleneksel Türk mutfağından.'
    },
    {
      name: 'Urfa Kebap',
      price: '₺320',
      description: 'Izgara lezzetlerinden.'
    },
    {
      name: 'Et Sote',
      price: '₺300',
      description: 'Doyurucu ana yemek seçeneği.'
    },
    {
      name: 'Tavuk Şiş',
      price: '₺250',
      description: 'Izgaradan sevilen bir lezzet.'
    },
    {
      name: 'İçli Köfte',
      price: '₺90',
      description: 'Geleneksel lezzet.'
    }
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

const menuItems = document.querySelector('#menu-items');

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((item) => {
      item.classList.remove('active');
    });

    tab.classList.add('active');

    const items = data[tab.dataset.category] || [];

    if (!menuItems) return;

    menuItems.innerHTML = items
      .map((item, index) => {
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
      })
      .join('');
  });
});

document.querySelectorAll('#year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
