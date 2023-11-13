const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  target.style.left = mouseX + "px";
  target.style.top = mouseY + "px";

  vertical.style.left = mouseX + "px";
  horizontal.style.top = mouseY + "px";

  tag.style.left = mouseX + 20 + "px";
  tag.style.top = mouseY + 10 + "px";

  tag.innerHTML = `
  ${mouseX}px, ${mouseY}px`;
});
