const movieProjectButton = document.querySelector("#movieProject");
const decoderRingButton = document.querySelector("#decoderRing");
const pomodoroProjectButton = document.querySelector("#pomodoroProject")
const grubDashProject = document.querySelector("#grubDashProject");

grubDashProject.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("https://starter-grub-dash-front-end-plum.vercel.app/dashboard", "_blank")
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