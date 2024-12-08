
document.getElementById("toggle").addEventListener("click", () => {
    const screenWhite = document.querySelector(".screenWhite");
    const toggle = document.getElementById("toggle");
    const rightNav = document.getElementById("navBar");

    if (toggle.checked) {
        rightNav.classList.remove("left-[-100%]");
        rightNav.classList.add("left-0");
        screenWhite.classList.remove("hidden");
    } else {
        rightNav.classList.add("left-[-100%]");
        rightNav.classList.remove("left-0");
        screenWhite.classList.add("hidden");
    }
});