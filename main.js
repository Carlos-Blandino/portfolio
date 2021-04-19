const movieProjectButton = document.querySelector("#movieProject");
const decoderRingButton = document.querySelector("#decoderRing");

movieProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("https://starter-movie-front-end-mocha.vercel.app/", "_blank")
});
decoderRingButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("https://carlos-blandino.github.io/decoder-ring-project/", "_blank")
})