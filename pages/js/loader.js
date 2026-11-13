const loader = document.getElementById("loader");

const startTime = Date.now();

window.addEventListener("load", () => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, 1000 - elapsedTime);

    setTimeout(() => {
        loader.classList.add("hide");
    }, remainingTime);
});