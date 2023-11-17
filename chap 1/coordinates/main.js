const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  vertical.style.transform = `translateX(${mouseX}px)`;
  horizontal.style.transform = `translateY(${mouseY}px)`;
  target.style.transform = `translate(${mouseX - targetHalfWidth}px, ${
    mouseY - targetHalfHeight
  }px)`;

  tag.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

  tag.innerHTML = `
  ${mouseX}px, ${mouseY}px`;
});
