document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const btnC = document.getElementById("btnC");
    const btnE = document.getElementById("btnE");
    const btnA = document.getElementById("btnA");
    const body = document.body;

    // Verifica se há um tema salvo no localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        title.textContent = "Tema Escuro";
    }

    function TrocaTema(tema) {
        if (tema === "claro") {
            body.classList.remove("dark-mode");
            title.textContent = "Tema Claro";
            localStorage.setItem("theme", "light");
        } else if (tema === "escuro") {
            body.classList.add("dark-mode");
            title.textContent = "Tema Escuro";
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.toggle("dark-mode");
            title.textContent = body.classList.contains("dark-mode") ? "Tema Escuro" : "Tema Claro";
            localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
        }
    }

    btnC.addEventListener("click", () => TrocaTema("claro"));
    btnE.addEventListener("click", () => TrocaTema("escuro"));
    btnA.addEventListener("click", () => TrocaTema("alternar"));
});
