import sublinks from './js/data.js';

import { welcome, main, navbar, toggleBtn, sidebarWrapper, sidebar, linkBtns, submenu, mainBody, hero, beinspyredText, logo, contactBtn, contactWrapper, date, items, continueBtn, formInputs, wordCount, errorText, textArea, userEmail, submit } from './js/declarations.js';

// setting year
date.innerText = new Date().getFullYear();

// reload page

logo.forEach(img => {
  img.onclick = () => {
    window.location.reload();
  };
});

// load page

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

// fixed nav

window.onscroll = () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  const heroHeight = hero.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > heroHeight) {
    navbar.classList.add('navColorChange');
  } else {
    navbar.classList.remove('navColorChange');
  }
};

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

// hide/show sidebar

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
    return `<a href="${link.url} title="${link.desc}"><i class="${link.icon}"></i>${link.label}</a>`;
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
      ${links.map((link) => {
        return `<a href="${link.url}" title="${link.desc}"><i class="${link.icon}"></i>${link.label}</a>`;
      }).join('')}
      </div>
      </section>
      `;
    }
  });
});

hero.addEventListener('mouseover', function (e) {
  submenu.classList.remove('show');
});
navbar.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});

// numbers

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});

// form area

continueBtn.onclick = (e) => {
  e.preventDefault();
  if (userEmail.value === '') {
    errorText.classList.add('show');
    userEmail.focus();
    setTimeout(() => {
      errorText.classList.remove('show');
    }, 7000);
  } else if (!userEmail.value.includes('@')) {
    errorText.classList.add('show');
    errorText.innerText = 'a valid email must contain an @. symbol';
    userEmail.focus();
    setTimeout(() => {
      errorText.classList.remove('show');
    }, 7000);
  } else {
    errorText.classList.remove('show');
    formInputs.classList.add('move');
  };
};

// word count
textArea.onkeyup = () => {
  let textAreaValue = textArea.value;
  let textAreaValueLength = textAreaValue.split(' ').length;

  if (textAreaValue === '') {
    wordCount.innerText = '';
  } else if (textAreaValueLength > 5) {
    submit.removeAttribute('disabled');
    wordCount.innerText = `word count: ${textAreaValueLength}`;
  } else if (textAreaValueLength < 5) {
    submit.setAttribute('disabled', 'true');
  } else {
    wordCount.innerText = `word count: ${textAreaValueLength}`;
  }
}

// post api area

// const key = 

// photo modal

const imagesEnvelop = document.querySelector('.imagesEnvelop');
const galleryWrapper = document.querySelector('.galleryWrapper');

imagesEnvelop.onclick = (e) => {
  let target = e.target;
  galleryWrapper.classList.add('show');
  galleryWrapper.innerHTML = `<div class="galleryModal"><img src=${target.src}><h3>description</h3><p>this image</p></div>`;
}

galleryWrapper.onclick = (e) => {
  e.currentTarget.classList.remove('show');
}

// pagination

import fetchFollowers from './js/fetchFollower.js';
import displayFollowers from './js/displayFollowers.js';
import paginate from './js/paginate.js';
import displayButtons from './js/displayButton.js';


const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

let index = 0
let pages = []

const setupUI = () => {
  displayFollowers(pages[index])
  displayButtons(btnContainer, pages, index)
}

const init = async () => {
  try {
    const followers = await fetchFollowers();
    title.textContent = 'pagination';
    pages = paginate(followers);
    setupUI();
  } catch (err) {
    title.style.fontSize = `${1.1}rem`;
    title.textContent = `${err} your request, please check your internet connection`;
  }
}

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next-btn')) {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})

window.addEventListener('load', init);