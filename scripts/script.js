
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

  function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = '';
    for (const link of subLinks) {
      const aEl = document.createElement('a');
      aEl.href = link.href;
      aEl.textContent = link.text;
      subMenuEl.appendChild(aEl);
    }
  }

  // Top menu click handling (event delegation)
  topMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== 'A') return;
    console.log(evt.target.textContent);

    // Toggle active class (only one at a time)
    if (evt.target.classList.contains('active')) {
      evt.target.classList.remove('active');
      return;
    }

    for (const link of topMenuLinks) link.classList.remove('active');
    evt.target.classList.add('active');

    // Show/hide submenu (build links comes next step)
    const linkObj = menuLinks.find((link) => link.text === evt.target.textContent);
    if (evt.target.classList.contains('active') && linkObj?.subLinks) {
      subMenuEl.style.top = '100%';
      buildSubmenu(linkObj.subLinks);
    } else {
      subMenuEl.style.top = '0';
    }
  });

  // Submenu click handling (event delegation) — log only for now
  subMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== 'A') return;
    console.log(evt.target.textContent);
  });