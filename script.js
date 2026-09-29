/* =========================================
ACCORDION
========================================= */

document.querySelectorAll(".accordion-header").forEach((button) => {

button.addEventListener("click", () => {

const item = button.closest(".accordion-item");
const accordion = button.closest(".accordion");

/*
* Закрываем остальные открытые пункты
* в этом же accordion.
*/
accordion.querySelectorAll(".accordion-item").forEach((otherItem) => {

if (otherItem !== item) {
otherItem.classList.remove("active");
}

});

/*
* Переключаем текущий пункт.
*/
item.classList.toggle("active");

});

});


/* =========================================
SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
(entries, observer) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("visible");

observer.unobserve(entry.target);

}

});

},
{
threshold: 0.12,
rootMargin: "0px 0px -40px 0px"
}
);


revealElements.forEach((element) => {
revealObserver.observe(element);
});


/* =========================================
BOOKING BUTTONS
========================================= */

const bookingButtons = document.querySelectorAll(".js-booking");

bookingButtons.forEach((button) => {

button.addEventListener("click", () => {

/*
* Instagram открывается через href.
* Здесь оставляем возможность позже заменить
* ссылку на Telegram / WhatsApp / форму записи.
*/

button.classList.add("clicked");

setTimeout(() => {
button.classList.remove("clicked");
}, 250);

});

});


/* =========================================
IMAGE FALLBACK
========================================= */

/*
* Если какая-то фотография ещё не загружена,
* вместо пустого блока показывается аккуратный
* фон.
*/

document.querySelectorAll("img").forEach((image) => {

image.addEventListener("error", () => {

image.style.display = "none";

const parent = image.parentElement;

if (parent) {
parent.classList.add("image-missing");
}

});

});


/* =========================================
ACTIVE ACCORDION — ACCESSIBILITY
========================================= */

document.querySelectorAll(".accordion-header").forEach((button) => {

button.setAttribute("aria-expanded", "false");

button.addEventListener("click", () => {

const item = button.closest(".accordion-item");

const isActive = item.classList.contains("active");

button.setAttribute(
"aria-expanded",
String(isActive)
);

});

});


/* =========================================
KEYBOARD ACCESS
========================================= */

document.addEventListener("keydown", (event) => {

if (event.key === "Escape") {

document
.querySelectorAll(".accordion-item.active")
.forEach((item) => {

item.classList.remove("active");

const button = item.querySelector(".accordion-header");

if (button) {
button.setAttribute(
"aria-expanded",
"false"
);
}

});

}

});


/* =========================================
CURRENT YEAR
========================================= */

const footerYear = document.querySelector(".footer-bottom span");

if (footerYear) {

footerYear.textContent =
`© ${new Date().getFullYear()} dr. Amina`;

}
