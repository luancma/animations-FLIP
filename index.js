export const animationFLIP = (initialHeight, newHeight) => {
  // Calculate the height difference
  let heightDifference = newHeight - initialHeight;
  // Set the initial transform to 'none' to trigger layout recalculations
  targetElement.style.transform = "none";
  // Calculate the final position
  let finalPosition = targetElement.getBoundingClientRect();

  // Apply the initial position using translate
  targetElement.style.transform = `translateY(${finalPosition.top}px)`;

  // Update the height to the final value
  targetElement.style.height = `${newHeight}px`;

  // Calculate the final position again
  finalPosition = targetElement.getBoundingClientRect();

  // Calculate the difference in position
  let positionDifference = finalPosition.top - initialPosition.top;

  // Apply the FLIP animation
  requestAnimationFrame(() => {
    // Restore the initial position using translate
    targetElement.style.transform = `translateY(${positionDifference}px)`;

    // Animate to the final position
    requestAnimationFrame(() => {
      targetElement.style.transform = "none";
    });
  });
};
