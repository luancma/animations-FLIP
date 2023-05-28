const box = document.querySelector(".box");
const container = document.querySelector(".container");

function flipAnimation() {
  const initialRect = box.getBoundingClientRect();

  // Change the position of the box
  box.style.transform = "translateX(150px)";

  const finalRect = box.getBoundingClientRect();

  const deltaX = initialRect.left - finalRect.left;
  const deltaY = initialRect.top - finalRect.top;
  const deltaWidth = initialRect.width / finalRect.width;
  const deltaHeight = initialRect.height / finalRect.height;

  // Play the animation using the Web Animations API
  box.animate(
    {
      transform: [`translate(${deltaX}px, ${deltaY}px)`, "translate(0, 0)"],
      transformOrigin: ["50% 50%", "50% 50%"],
      width: [`${deltaWidth * 100}%`, "100%"],
      height: [`${deltaHeight * 100}%`, "100%"],
    },
    {
      duration: 1000,
      easing: "ease-out",
      fill: "forwards",
    }
  );
}

// Trigger the animation when the container is clicked
container.addEventListener("click", flipAnimation);
