const mobileMenuButton = document.querySelector(".mobile-nav-toggle");
const mobileMenu = document.getElementById("primary-navigation");

mobileMenuButton.addEventListener("click", () => {
  console.log("clicked");
  mobileMenu.style.transform =
    mobileMenu.style.transform === "translateX(0%)"
      ? "translateX(100%)"
      : "translateX(0%)";
});
