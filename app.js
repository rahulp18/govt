function openNav() {
  document.getElementById("mySidebar").style.width = "250px";

  document.getElementById("main").style.marginRight = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";

  document.getElementById("main").style.marginRight = "0";
}
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

let slider = tns({
  container: ".my-slider",
  items: 3,
  speed: 300,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3500,
  autoplayText: ["▶", "❚❚"],
  swipeAngle: false,
  prevButton: ".previous",
  nextButton: ".next",
  responsive: {
    1600: {
      items: 4,
      controls: true,
      edgePadding: 30,
      gutter: 20,
    },
    1024: {
      items: 3,
      controls: true,
      edgePadding: 30,
      gutter: 20,
    },
    768: {
      items: 2,
      controls: true,
      edgePadding: 30,
      gutter: 20,
    },
    100: {
      items: 1,
      controls: true,
      edgePadding: 30,
      gutter: 20,
    },
    350: {
      items: 1,
      controls: true,
      edgePadding: 30,
      gutter: 20,
    },
  },
});
