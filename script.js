function criandoNeve() {
    const neve = document.createElement("div");
    neve.classList.add("neve");

    neve.style.left = Math.random() * 100 + "vw";
    neve.style.animationDuration = Math.random() * 2 + 3 + "s";

    neve.innerText = "❄";

    document.body.appendChild(neve);

    setTimeout(() => {
        neve.remove();
    }, 5000);
}

setInterval(criandoNeve, 300);