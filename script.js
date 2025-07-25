const slider = document.querySelector(".items");
let isDown = false;
let startX;
let ScrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  ScrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault(); // prevent default activity
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = ScrollLeft - walk;
});
