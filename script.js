/* ======= MENÚ DE NAVEGACIÓN ======= */
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

/* ======= MODAL PARA "Proyecciones Estratégicas 360" ======= */
const modal = document.getElementById("modalProyecciones");
const btnProyecciones = document.getElementById("btnProyecciones");
const spanClose = document.getElementsByClassName("close")[0];

if (btnProyecciones) {
    btnProyecciones.addEventListener("click", () => {
        modal.style.display = "block";
    });
}

if (spanClose) {
    spanClose.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/* ======= TABLAS DINÁMICAS DE INDICADORES ======= */
document.querySelectorAll("table").forEach(tabla => {
    tabla.addEventListener("mouseenter", () => {
        tabla.style.boxShadow = "0px 0px 15px rgba(0, 102, 204, 0.5)";
    });
    tabla.addEventListener("mouseleave", () => {
        tabla.style.boxShadow = "none";
    });
});

/* ======= BOTÓN DE IR ARRIBA ======= */
const btnArriba = document.createElement("button");
btnArriba.textContent = "↑";
btnArriba.style.position = "fixed";
btnArriba.style.bottom = "20px";
btnArriba.style.right = "20px";
btnArriba.style.padding = "10px 15px";
btnArriba.style.fontSize = "18px";
btnArriba.style.borderRadius = "50%";
btnArriba.style.backgroundColor = "#004080";
btnArriba.style.color = "white";
btnArriba.style.border = "none";
btnArriba.style.cursor = "pointer";
btnArriba.style.display = "none";
document.body.appendChild(btnArriba);

btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});
