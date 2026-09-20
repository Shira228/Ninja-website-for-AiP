console.log("NINJA JS loaded");


// ==============================
// ПАСХАЛКА
// ==============================

const button = document.getElementById("easterEggButton");
const popup = document.getElementById("easterEgg");
const closeButton = document.getElementById("closeEasterEgg");

console.log("Button:", button);
console.log("Popup:", popup);


// Открытие
button.addEventListener("click", function () {
    console.log("Easter egg opened");
    popup.classList.add("active");
});


// Закрытие крестиком
closeButton.addEventListener("click", function () {
    popup.classList.remove("active");
});


// Закрытие при клике по затемнению
popup.addEventListener("click", function (event) {

    if (event.target === popup) {
        popup.classList.remove("active");
    }

});
