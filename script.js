const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const photo = document.getElementById("photo");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    message.textContent = "💜 ¡Sabía que dirías que sí! 💜";
    message.style.opacity = "1";
    photo.classList.remove("hidden"); // Muestra la foto
});
