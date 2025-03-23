let topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topButton.style.display = window.scrollY > 200 ? "block" : "none";
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
