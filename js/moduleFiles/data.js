const sublinks = [
  {
    page: 'services',
    links: [
      { label: 'indoors', icon: 'fas fa-house', url: '/services#indoors',desc:'' },
      { label: 'outdoors', icon: 'fa-solid fa-map-location-dot', url: '/services#outdoors',desc:'' },
      { label: 'sessions', icon: 'fas fa-book', url: '/services#sessions',desc:'' },
    ],
  },
  {
    page: 'blog',
    links: [
      { label: 'posts', icon: 'fas fa-pen-to-square', url: '/blog#posts',desc:''},
      { label: 'libraries', icon: 'fas fa-folder', url: '/blog#libraries',desc:'' },
      { label: 'explore', icon: 'fa-brands fa-wpexplorer', url: '/blog#explore', desc: 'explore thousands of beautiful photography from other photographers' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: 'fas fa-briefcase', url: '/company#about',desc:'' },
      { label: 'customers', icon: 'fas fa-person', url: '/company#customers',desc:'' },
      { label: 'billing', icon: 'fas fa-book', url: '/company#billing',desc:'' },
    ],
  },
];

export default sublinks;