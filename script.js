document.addEventListener("DOMContentLoaded", function () {
    const colorSelect = document.getElementById("colorSelect");
    const bgColorSelect = document.getElementById("bgColorSelect");
    const paddingSelect = document.getElementById("paddingSelect");
    const fontSizeSelect = document.getElementById("fontSizeSelect");
    const fontWeightSelect = document.getElementById("fontWeightSelect");
    const targetDiv = document.getElementById("targetDiv");

    colorSelect.addEventListener("change", function () {
        targetDiv.style.color = colorSelect.value;
    });

    bgColorSelect.addEventListener("change", function () {
        targetDiv.style.backgroundColor = bgColorSelect.value;
    });

    paddingSelect.addEventListener("change", function () {
        targetDiv.style.padding = paddingSelect.value;
    });

    fontSizeSelect.addEventListener("change", function () {
        targetDiv.style.fontSize = fontSizeSelect.value;
    });

    fontWeightSelect.addEventListener("change", function () {
        targetDiv.style.fontWeight = fontWeightSelect.value;
    });
});
