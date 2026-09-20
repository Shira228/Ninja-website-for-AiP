console.log("NINJA JS loaded");


// ==========================================
// ПОЯВЛЕНИЕ СЕКЦИЙ
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
// ПАСХАЛКА NINJA-GO
// ==========================================

const easterEggButton = document.getElementById("easterEggButton");
const easterEgg = document.getElementById("easterEgg");
const closeEasterEgg = document.getElementById("closeEasterEgg");


// Открытие

if (easterEggButton && easterEgg) {

    easterEggButton.addEventListener("click", () => {
        easterEgg.classList.add("active");
    });

}


// Закрытие крестиком

if (closeEasterEgg && easterEgg) {

    closeEasterEgg.addEventListener("click", () => {
        easterEgg.classList.remove("active");
    });

}


// Закрытие при нажатии на фон

if (easterEgg) {

    easterEgg.addEventListener("click", (event) => {

        if (event.target === easterEgg) {
            easterEgg.classList.remove("active");
        }

    });

}
