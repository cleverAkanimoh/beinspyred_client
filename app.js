import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');
const beinspyredText = document.querySelector('.hero-info em');
const welcome = document.querySelector('#welcome');
const main = document.querySelector('main');
const logo = document.querySelector('.nav-logo');
const contactBtn = document.querySelectorAll('.contact-btn');
const contactWrapper = document.querySelector('.contactWrapper');

// load page
logo.onclick = () => {
  window.location.reload();
}

window.onload = () => {
  welcome.style.display = 'none';
  main.style.display = 'block';
}

// open/close contact page

contactBtn.forEach(btn => {
  btn.onclick = () => {
    contactWrapper.classList.add('show');
  }
});

contactWrapper.onclick = () => {
  contactWrapper.classList.remove('show');
}

// text effect

const strText = beinspyredText.textContent;
const splitText = strText.split('');
beinspyredText.innerHTML = '';
splitText.forEach(txt => {
  beinspyredText.innerHTML += `<span>${txt}</span>`;
})

let char = 0;

const ontick = () => {
  let span = beinspyredText.querySelectorAll('span')[char];
  span.classList.add('show')
  char++
  if (char === splitText.length) {
    complete();
    return;
  }
}

const complete = () => {
  clearInterval(timer);
}

let timer = setInterval(ontick, 200)

// hide/show sideabar

toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
sidebarWrapper.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
sidebar.innerHTML = sublinks.map((item) => {
  const { links, page } = item;
  return `<article >
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links.map((link) => {
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  }).join('')}
</div>
</article>`;
}).join('');

linkBtns.forEach((btn) => {
  btn.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = sublinks.find((link) => link.page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }
      submenu.innerHTML = `
      <section> 
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
          .map((link) => {
            return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
          })
          .join('')}
      </div>
      </section>
      `;
    }
  });
});

hero.addEventListener('mouseover', function (e) {
  submenu.classList.remove('show');
});
nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});