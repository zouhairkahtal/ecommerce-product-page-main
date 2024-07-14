const menubtn = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navlinks = document.querySelector(".nav-links");
const closebtn = document.querySelector(".close-icon");

menubtn.addEventListener("click", () => {
  navlinks.classList.add("active");
  backdrop.classList.add("active");
});
closebtn.addEventListener("click", () => {
  navlinks.classList.remove("active");
  backdrop.classList.remove("active");
});
backdrop.addEventListener("click", () => {
  navlinks.classList.remove("active");
  backdrop.classList.remove("active");
});
