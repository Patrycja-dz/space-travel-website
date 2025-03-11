const toggleButton = document.querySelector(".mobile-nav-toggle");
const nav = document.getElementById("primary-navigation");

const toggleNav = () => {
  const isVisible = nav.getAttribute("data-is-visible") === "true";
  toggleIcon();
  nav.setAttribute("data-is-visible", !isVisible);
};

const toggleIcon = () => {
  const expanded = toggleButton.getAttribute("aria-expanded") === "true";
  toggleButton.setAttribute("aria-expanded", !expanded);
};

toggleButton.addEventListener("click", toggleNav);
