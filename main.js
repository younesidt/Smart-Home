import './style.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');  
});


// const darkToggle = document.querySelector(".toggle-dark");
// darkToggle.addEventListener('click', () => {
//   document.documentElement.classList.toggle('dark');
// });







// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))






//Light and Dark Mode

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
}

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
}


const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

sunIcon.addEventListener("click", () => {
  themeSwitch();
})

moonIcon.addEventListener("click", () => {
  themeSwitch();
})

themeCheck();