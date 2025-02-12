const store= document.querySelector(".store");
// console.log(store);
const navLinks= document.querySelector(".nav-links");
// console.log(navLinks);
store.addEventListener(`click`,()=>{
  navLinks.classList.toggle(`active`);
});