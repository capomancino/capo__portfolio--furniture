document.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll("[data-target]");
  const tabContents = document.querySelectorAll("[data-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tc) => {
        tc.classList.remove("products__content--active");
      });
      target.classList.add("products__content--active");

      tabs.forEach((t) => {
        t.classList.remove("products__tab--active");
      });
      tab.classList.add("products__tab--active");
    });
  });
});
