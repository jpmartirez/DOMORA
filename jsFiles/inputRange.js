const slider = document.getElementById("school");
const sliderValue = document.getElementById("sliderValue");

const slider2 = document.getElementById("laundry");
const sliderValue2 = document.getElementById("sliderValue2");

const slider3 = document.getElementById("eatery");
const sliderValue3 = document.getElementById("sliderValue3");

const slider4 = document.getElementById("store");
const sliderValue4 = document.getElementById("sliderValue4");

      // Update the text when the slider is moved
slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value;
});

slider2.addEventListener("input", () => {
    sliderValue2.textContent = slider2.value;
});

slider3.addEventListener("input", () => {
    sliderValue3.textContent = slider3.value;
});

slider4.addEventListener("input", () => {
    sliderValue4.textContent = slider4.value;
});