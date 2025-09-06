const fartSounds = [
  new Audio("fart1.mp3"),
  new Audio("fart2.mp3"),
  new Audio("fart3.mp3")
];

const fartButton = document.getElementById("fartButton");
const mainImage = document.getElementById("main-image");

fartButton.addEventListener("click", () => {
  // Play random fart
  const index = Math.floor(Math.random() * fartSounds.length);
  const sound = fartSounds[index];
  sound.currentTime = 0;
  sound.play();

  // Toggle image between Eagle and Cartoon
  if (mainImage.src.includes("Christopher-Eagle.png")) {
    mainImage.src = "Christopher-Fart-Cartoon.png";
  } else {
    mainImage.src = "Christopher-Eagle.png";
  }
});

// Make fart sounds when clicking the social links
document.querySelectorAll('.fart-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const index = Math.floor(Math.random() * fartSounds.length);
    const sound = fartSounds[index];
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
      window.location.href = link.dataset.url;
    }, 300); // short delay so the fart plays
  });
});
