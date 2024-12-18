const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-lin  e" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});

function signupform(){
  document.querySelector(".dialogbox").style.display="block";
}

function closesignuppage(){
  document.querySelector(".dialogbox").style.display="none";
}

document.querySelector(".dialogclose").addEventListener("click",(e)=>{
  if (e.target.classList.contains("dialogclose")) {

  document.querySelector(".dialogbox").style.display="none";
  
 
}
});


// Select the password input and toggle button
const passwordInput = document.querySelector('.form-input[type="password"]');
const passwordToggle = document.querySelector('.password-toggle');
const eyeIcon = passwordToggle.querySelector('.eye-icon');

// Add click event listener to the toggle button
passwordToggle.addEventListener('click', () => {
  // Toggle the password visibility
  const isPasswordVisible = passwordInput.type === 'text';
  passwordInput.type = isPasswordVisible ? 'password' : 'text';

  // Update the eye icon to indicate the current state
  eyeIcon.innerHTML = isPasswordVisible
    ? `
      <path
        stroke-width="1.5"
        stroke="currentColor"
        d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
      ></path>
      <circle
        stroke-width="1.5"
        stroke="currentColor"
        r="3"
        cy="12"
        cx="12"
      ></circle>
    `
    : `
      <path
        stroke-width="1.5"
        stroke="currentColor"
        d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
      ></path>
      <path
        stroke-width="1.5"
        stroke="currentColor"
        d="M4 4L20 20"
      ></path>
    `;
});
