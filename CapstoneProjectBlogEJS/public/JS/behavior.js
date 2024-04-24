const headerNav = document.querySelector(".my__blog__header");
const headerLogo = document.querySelector(".my__blog__header__logo__image svg");
document.addEventListener("scroll", (e) => {
    const scrollPosition = window.scrollY;
    const threshold = 500;


    if (scrollPosition > threshold) {
      headerNav.classList.add("scroll");
      headerLogo.classList.add("scroll");
    } else {
       headerNav.classList.remove("scroll");
       headerLogo.classList.remove("scroll");
    }
})