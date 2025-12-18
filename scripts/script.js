
// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
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
  subMenuEl.style.position = 'absolute';
  subMenuEl.style.top = '0';
  
  // Part 3 — Menu buttons from data
  for (let link of menuLinks) {
    const aEl = document.createElement('a');
    aEl.href = link.href;
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl);
  }

  // Cache top menu links
  const topMenuLinks = topMenuEl.querySelectorAll('a');

  // Top menu click handling (event delegation) — log only for now
  topMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== 'A') return;
    console.log(evt.target.textContent);
  });