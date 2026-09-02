const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
nav.classList.toggle("active");
});

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

```
document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀️";
} else {
    themeButton.textContent = "🌙";
}
```

});

const eraButton = document.getElementById("eraButton");
const eraResult = document.getElementById("eraResult");

const eras = [
"My World 💜",
"Believe ✨",
"Purpose 🖤",
"Justice 🤍"
];

eraButton.addEventListener("click", () => {

```
const random =
    eras[Math.floor(Math.random() * eras.length)];

eraResult.textContent =
    "Sua era é: " + random;
```

});

const readButtons =
document.querySelectorAll(".read-more");

readButtons.forEach(button => {

```
button.addEventListener("click", () => {

    alert(
        "Em breve você poderá ler este post completo! 💜"
    );

});
```

});
