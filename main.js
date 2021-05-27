const movieProjectButton = document.querySelector("#movieProject");
const decoderRingButton = document.querySelector("#decoderRing");
const pomodoroProjectButton = document.querySelector("#pomodoroProject")
const grubDashProject = document.querySelector("#grubDashProject");
const reservationProject = document.querySelector("#reservationProject");
grubDashProject.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("https://starter-grub-dash-front-end-plum.vercel.app/", "_blank")
});

movieProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("https://starter-movie-front-end-mocha.vercel.app/", "_blank")
});
pomodoroProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("https://project-pomodoro-timer-qualified-1-three.vercel.app/", "_blank")
});
decoderRingButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("https://carlos-blandino.github.io/decoder-ring-project/", "_blank")
})
reservationProject.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("https://frontend-restaurant-reservation.vercel.app/dashboard", "_blank")
})