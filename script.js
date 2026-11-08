document.addEventListener('DOMContentLoaded', () => {
  // Mobil menü
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Ürünler
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
      { name: 'Dondurma Çeşitleri(top)', price: '₺50', description: '' },
      { name: 'San Sebastian', price: '₺350', description: '' },
      { name: 'Belçika Çikolatalı Sufle', price: '₺350', description: '' },
      { name: 'Kadife Pasta', price: '₺350', description: '' },
      { name: 'Volkan Pasta(Ferrero)', price: '₺350', description: '' }
    ],
    noAlcohol: [
      { name: 'Mojito', price: '₺400', description: '' },
      { name: 'Tropical', price: '₺400', description: '' },
      { name: 'Summer Breeze', price: '₺400', description: '' },
      { name: 'Tarzan Cooler', price: '₺400', description: '' },
      { name: 'Redbull Twist', price: '₺400', description: '' },
      { name: 'Cinderella', price: '₺400', description: '' }
    ],
    
  };

  const tabs = document.querySelectorAll('.menu-tabs .tab');
  const menuItems = document.querySelector('#menu-items');

  function showCategory(tab) {
    const category = tab.dataset.category;
    const items = data[category];

    if (!items || !menuItems) return;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    menuItems.innerHTML = items.map((item, index) => {
      const name = item.name || '';
      const price = item.price || 'Fiyat sorunuz';
      const descriptionText = typeof item.description === 'string'
        ? item.description.trim()
        : '';
      const description = descriptionText
        ? `<p>${descriptionText}</p>`
        : '';

      return `
        <article class="menu-card">
          <span class="menu-number">${String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>${name}</h3>
            ${description}
          </div>
          <span class="price">${price}</span>
        </article>
      `;
    }).join('');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => showCategory(tab));
  });

  // Sayfa açıldığında aktif sekmeyi göster.
  const initialTab =
    document.querySelector('.menu-tabs .tab.active') || tabs[0];

  if (initialTab) {
    showCategory(initialTab);
  }

  // Footer yılı
  document.querySelectorAll('#year').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
