const sr = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__content, .discount__content, .subscribe__content`);
sr.reveal(`.brends__image, .products__tab, .footer__column`, {
  interval: 200,
  origin: "top",
  delay: 500,
});
sr.reveal(`.products__card`, {
  interval: 200,
  origin: "left",
  delay: 600
});
sr.reveal(`.blog__photo`, {
  origin: "top",
  delay: 400
});
sr.reveal(`.blog__content`, {
  origin: "top",
  delay: 600
});
