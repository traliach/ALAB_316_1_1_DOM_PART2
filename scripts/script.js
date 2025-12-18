
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
  // Part 1 — Main content
  const mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
  mainEl.classList.add('flex-ctr');
  
  // Part 2 — Top menu bar
  const topMenuEl = document.querySelector('#top-menu');
  topMenuEl.style.height = '100%';
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.classList.add('flex-around');

  // Part 2b — Sub menu bar
  const subMenuEl = document.querySelector('#sub-menu');
  subMenuEl.style.height = '100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.classList.add('flex-around');
  
  // Part 3 — Menu buttons from data
  for (let link of menuLinks) {
    const aEl = document.createElement('a');
    aEl.href = link.href;
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl);
  }