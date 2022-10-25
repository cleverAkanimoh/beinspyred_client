// import sublinks from './moduleFiles/data.js';

import galleryImages from './moduleFiles/imageGallery.js';

import { welcome, main, navbar, hero, beinspyredText, logos, contactBtn, contactWrapper, date, items, imagesEnvelop, galleryWrapper } from './moduleFiles/declarations.js';

const scrollImages = document.querySelectorAll('.otherImg article div img');

let move = 1;

const movingImages = () => {
  scrollImages.forEach((img, index) => {
    img.style.cssText = `translate: -${move++}px`;
  })
}

let movingForward = setInterval(movingImages, 1000)

// setting year
date.innerText = new Date().getFullYear();

// reload page

logos.forEach(logo => {
  logo.onclick = () => {
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

const navHeaderLogo = document.querySelector('.nav-header')

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
    navHeaderLogo.innerHTML = `<img src="images/logo2.png" class="nav-logo" alt="" />
						<button class="btn about-btn">about us</button>`;
    const logos = document.querySelectorAll('.nav-logo');
    logos.forEach(logo => {
      logo.onclick = () => {
        window.location.reload();
      };
    });
  } else {
    navbar.classList.remove('navColorChange');
    navHeaderLogo.innerHTML = `<img src="images/logo.png" class="nav-logo" alt="" />
						<button class="btn about-btn">about us</button>`;
    const logos = document.querySelectorAll('.nav-logo');
    logos.forEach(logo => {
      logo.onclick = () => {
        window.location.reload();
      };
    });
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

// toggleBtn.addEventListener('click', () => {
//   sidebarWrapper.classList.add('show');
// });
// sidebarWrapper.addEventListener('click', () => {
//   sidebarWrapper.classList.remove('show');
// });

// set sidebar
// sidebar.innerHTML = sublinks.map((item) => {
//   const { links, page } = item;
//   return `<article >
// <h4>${page}</h4>
// <div class="sidebar-sublinks">
// ${links.map((link) => {
//     return `<a href="${link.url} title="${link.desc}"><i class="${link.icon}"></i>${link.label}</a>`;
//   }).join('')}
// </div>
// </article>`;
// }).join('');

// linkBtns.forEach((btn) => {
//   btn.addEventListener('mouseover', function (e) {
//     const text = e.currentTarget.textContent;
//     const tempBtn = e.currentTarget.getBoundingClientRect();
//     const center = (tempBtn.left + tempBtn.right) / 2;
//     const bottom = tempBtn.bottom - 3;

//     const tempPage = sublinks.find((link) => link.page === text);
//     if (tempPage) {
//       const { page, links } = tempPage;
//       submenu.classList.add('show');
//       submenu.style.left = `${center}px`;
//       submenu.style.top = `${bottom}px`;
//       // OPTIONAL
//       let columns = 'col-2';
//       if (links.length === 3) {
//         columns = 'col-3';
//       }
//       if (links.length > 3) {
//         columns = 'col-4';
//       }
//       submenu.innerHTML = `
//       <section> 
//       <h4>${page}</h4>
//       <div class="submenu-center ${columns}">
//       ${links.map((link) => {
//         return `<a href="${link.url}" title="${link.desc}"><i class="${link.icon}"></i>${link.label}</a>`;
//       }).join('')}
//       </div>
//       </section>
//       `;
//     }
//   });
// });

// hero.addEventListener('mouseover', function (e) {
//   submenu.classList.remove('show');
// });
// navbar.addEventListener('mouseover', function (e) {
//   if (!e.target.classList.contains('link-btn')) {
//     submenu.classList.remove('show');
//   }
// });

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
};

items.forEach((item) => {
  updateCount(item);
});

// form area

// continueBtn.onclick = (e) => {
//   e.preventDefault();
//   if (userEmail.value === '') {
//     errorText.classList.add('show');
//     userEmail.focus();
//     setTimeout(() => {
//       errorText.classList.remove('show');
//     }, 7000);
//   } else if (!userEmail.value.includes('@')) {
//     errorText.classList.add('show');
//     errorText.innerText = 'a valid email must contain an @. symbol';
//     userEmail.focus();
//     setTimeout(() => {
//       errorText.classList.remove('show');
//     }, 7000);
//   } else {
//     errorText.classList.remove('show');
//     formInputs.classList.add('move');
//   };
// };

// word count
// textArea.onkeyup = () => {
//   let textAreaValue = textArea.value.trim();
//   let textAreaValueLength = textAreaValue.split(' ').length;

//   if (textAreaValue === '') {
//     wordCount.innerText = '';
//   } else if (textAreaValueLength > 5) {
//     submit.removeAttribute('disabled');
//     submit.title = 'submit';
//     wordCount.innerText = `word count: ${textAreaValueLength}`;
//   } else if (textAreaValueLength < 5) {
//     submit.setAttribute('disabled', 'true');
//     submit.title = 'submit disabled you need to enter atleast 5 words'
//     wordCount.innerText = `word count: ${textAreaValueLength}`;
//   } else {
//     wordCount.innerText = `word count: ${textAreaValueLength}`;
//   }
// }

// post api area

// const postInfo = document.querySelector('#postInfo');

// const apiKey = 'AIzaSyANUrcJTHxucJe-_D_3cmy1aBGOEzFmXu8';

// const url = `https://www.googleapis.com/blogger/v3/blogs/2399953?key=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     return data;
    
//   })
//   .catch(err => console.log('An error occured, failed to load blog post.'));

// photoGallery

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayImageItems(galleryImages);
});
//* To display projects

const diplayImageItems = imageItems => {
  let displayImages = imageItems.map(image => {
    return `<picture>
          <img class="galleryImage" src=${image.src}>
        </picture>`;
  });

  displayImages = displayImages.join("");

  imagesEnvelop.innerHTML = displayImages;
}

// photo modal

imagesEnvelop.onclick = (e) => {
  let target = e.target;
  if (target.classList.contains('galleryImage')) {
    galleryWrapper.classList.add('show');
    galleryWrapper.innerHTML = `<div class="galleryModal"><img src=${target.src}><h3>description</h3><div class="underline"></div><p>${target.alt}</p></div>`;
  } else {
    return;
  }
}

galleryWrapper.onclick = (e) => {
  e.currentTarget.classList.remove('show');
}

// pagination

// import fetchFollowers from './moduleFiles/fetchFollower.js';
// import displayFollowers from './moduleFiles/displayFollowers.js';
// import paginate from './moduleFiles/paginate.js';
// import displayButtons from './moduleFiles/displayButton.js';

// const titleContainer = document.querySelector('.section-title');
// const btnContainer = document.querySelector('.btn-container');

// let index = 0;
// let pages = [];

// const setupUI = () => {
//   displayFollowers(pages[index])
//   displayButtons(btnContainer, pages, index)
// }

// const init = async () => {
//   try {
//     const followers = await fetchFollowers();
//     title.textContent = 'explore';
//     pages = paginate(followers);
//     setupUI();
//   } catch (err) {
//     titleContainer.innerHTML = `<h4>your request cannot be processed, please check your internet connection</h4>`;
//   }
// }

// btnContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('btn-container')) return
//   if (e.target.classList.contains('page-btn')) {
//     index = parseInt(e.target.dataset.index)
//   }
//   if (e.target.classList.contains('next-btn')) {
//     index++
//     if (index > pages.length - 1) {
//       index = 0
//     }
//   }
//   if (e.target.classList.contains('prev-btn')) {
//     index--
//     if (index < 0) {
//       index = pages.length - 1
//     }
//   }
//   setupUI()
// })

// window.addEventListener('load', init);

// explore

// const accessKey = 'OQIrrQHdFrElNRGYAlEiF9cUD68rO6vcO9D7lX0f1Bs';
// const secretKey = '5arQCJhEkW_GSViQ2cPxj6ta9CQX9i0wmpSIJ5N8WRI';