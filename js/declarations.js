const welcome = document.querySelector('#welcome');

const main = document.querySelector('main');

const navbar = document.querySelector('.nav');

const toggleBtn = document.querySelector('.toggle-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');

const mainBody = document.querySelector('#mainBody');
const hero = document.querySelector('.hero');

const beinspyredText = document.querySelector('.hero-info em');
const logo = document.querySelectorAll('.nav-logo');

const contactBtn = document.querySelectorAll('.contact-btn');
const contactWrapper = document.querySelector('.contactWrapper');

const date = document.querySelector('#date');

const items = [...document.querySelectorAll('.number')];

const continueBtn = document.querySelector('#continueBtn');
const formInputs = document.querySelector('.formInputs');
const wordCount = document.querySelector('form label');
const errorText = document.querySelector('form legend');
const textArea = document.querySelector('form textarea');
const userEmail = document.querySelector('#userEmail');
const submit = document.querySelector('#submitInput');

export { welcome, main, navbar, toggleBtn, sidebarWrapper, sidebar, linkBtns, submenu, mainBody, hero, beinspyredText, logo, contactBtn, contactWrapper, date, items, continueBtn, formInputs, wordCount, errorText, textArea, userEmail, submit };