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

const easterEggButton =
    document.getElementById("easterEggButton");

const easterEgg =
    document.getElementById("easterEgg");

const closeEasterEgg =
    document.getElementById("closeEasterEgg");


// ОТКРЫТИЕ

if (easterEggButton && easterEgg) {

    easterEggButton.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        easterEgg.classList.add("active");

    });

}


// ЗАКРЫТИЕ КРЕСТИКОМ

if (closeEasterEgg && easterEgg) {

    closeEasterEgg.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        easterEgg.classList.remove("active");

    });

}


// ЗАКРЫТИЕ ПО ФОНУ

if (easterEgg) {

    easterEgg.addEventListener("click", (event) => {

        if (event.target === easterEgg) {
            easterEgg.classList.remove("active");
        }

    });

}
