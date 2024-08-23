const container = document.querySelector(".container");
const size1 = document.querySelector("#size1");
const size2 = document.querySelector("#size2");
const size3 = document.querySelector("#size3");
const colors = document.querySelector("#colors");

document.body.oncontextmenu = (e) => {
    if (e.button == 2) {
        e.preventDefault(); // Prevent the default right-click behavior
        return false;
    }
}

let color = "#000000";

colors.addEventListener('input', (e) => {

    color = e.target.value;
});

changeSize(16);

size1.addEventListener("click", function () {


    changeSize(16);
});
size2.addEventListener("click", function () {

    changeSize(32);
});
size3.addEventListener("click", function () {

    changeSize(64);
});

function getColor() {
    colors.addEventListener('oninput', function () {
        value = colors.value;
    });
}

function changeSize(num) {
    let width = 480 / num;

    container.style.gridTemplateColumns = `repeat(${num},${width}px)`;
    container.style.gridTemplateRows = `repeat(${num},${width}px)`;

    container.innerHTML = "";

    for (let i = 0; i < num * num; i++) {

        const pixel = document.createElement("div");


        pixel.classList.add("pixel");

        pixel.addEventListener("contextmenu", function () {

            pixel.style.backgroundColor = "white";
        });

        pixel.addEventListener("mouseover", function () {

            pixel.style.backgroundColor = color;

            pixel.style.opacity = `${(parseFloat(pixel.style.opacity) || 0) + 0.1}`;

        });
        




        container.appendChild(pixel);
    }

}