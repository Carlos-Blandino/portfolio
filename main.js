const localLibraryButton = document.querySelector("#localLibrary");
const decoderRingButton = document.querySelector("#decoderRing");

localLibraryButton.addEventListener("click", (event) => {
    window.open("https://carlos-blandino.github.io/local-library-project/", "_blank")
});
decoderRingButton.addEventListener("click", (event) => {
    window.open("https://carlos-blandino.github.io/decoder-ring-project/", "_blank")
})