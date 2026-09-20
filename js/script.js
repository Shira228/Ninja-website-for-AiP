// ==========================================
// NINJA — Основной JavaScript
// ==========================================

console.log("NINJA site loaded");


// ==========================================
// ПОЯВЛЕНИЕ СЕКЦИЙ ПРИ ПРОКРУТКЕ
// ==========================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {
    observer.observe(section);
});


// ==========================================
// ПАСХАЛКА NINJAGO
// ==========================================

const easterEggButton = document.getElementById("easterEggButton");
const easterEgg = document.getElementById("easterEgg");
const closeEasterEgg = document.getElementById("closeEasterEgg");


// Открыть пасхалку

easterEggButton.addEventListener("click", () => {
    easterEgg.classList.add("active");
});


// Закрыть пасхалку

closeEasterEgg.addEventListener("click", () => {
    easterEgg.classList.remove("active");
});


// Закрытие по клику вне окна

easterEgg.addEventListener("click", (event) => {

    if (event.target === easterEgg) {
        easterEgg.classList.remove("active");
    }

});
