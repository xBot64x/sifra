document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const footer = document.createElement("footer");
        footer.textContent = "Ve zdrojích se najde kód";
        footer.style.display = "none"; // Skryjeme řádek při přidání

        document.body.appendChild(footer);

        // Zobrazíme řádek po jedné minutě
        setTimeout(() => {
            footer.style.display = "block";
        }, 60000);
    }, 60000);
});