//Для блока Range price"
const slider = document.getElementById("slider");

noUiSlider.create(slider, {
  start: [500, 6000],
  connect: true,
  step: 1,
  tooltips: [false, wNumb({ decimals: 0, suffix: " $" })],
  range: {
    min: [0],
    max: [9999],
  },
});

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const inputs = [input1, input2];

slider.noUiSlider.on("update", function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});

inputs.forEach((input, handle) => {
  input.addEventListener("change", function () {
    slider.noUiSlider.setHandle(handle, this.value);
  });
});

//Для блока с THC
const slider_THC = document.getElementById("slider_THC");

noUiSlider.create(slider_THC, {
  start: 40,
  connect: "lower",
  step: 1,
  tooltips: wNumb({ decimals: 0, suffix: " %" }),
  range: {
    min: [0],
    max: [100],
  },
});

const input4 = document.getElementById("input4");

slider_THC.noUiSlider.on("update", function (values, handle) {
  input4.value = Math.round(values);
});

input4.addEventListener("change", function () {
  slider_THC.noUiSlider.set(this.value);
});

//стили для границы handle
slider_THC.querySelector(".noUi-horizontal .noUi-handle-lower").style.right =
  "0px";

//Для блока CBD
const slider_CBD = document.getElementById("slider_CBD");

noUiSlider.create(slider_CBD, {
  start: 40,
  connect: "lower",
  step: 1,
  tooltips: wNumb({ decimals: 0, suffix: " %" }),
  range: {
    min: [0],
    max: [100],
  },
});

const input6 = document.getElementById("input6");

slider_CBD.noUiSlider.on("update", function (values, handle) {
  input6.value = Math.round(values);
});

input6.addEventListener("change", function () {
  slider_CBD.noUiSlider.set(this.value);
});

input6.addEventListener("input", function () {
  var maxLength = 100;
  if (this.value.length > maxLength) {
    this.value = this.value.substring(0, maxLength);
  }
});

//стили для границы handle
slider_CBD.querySelector(".noUi-horizontal .noUi-handle-lower").style.right =
  "0px";

//Для блока с классом "Nose"

const connectSlider = document.getElementById("nose");

noUiSlider.create(connectSlider, {
  start: 100,
  connect: "upper",
  range: {
    min: 0,
    max: 100,
  },
});

//стили для границы slider
nose.querySelector(".noUi-connect").style.background = "rgba(23, 23, 34, 1)";
nose.querySelector(".noUi-connect").style.borderRadius = "0";
nose.querySelector(".noUi-connects").style.borderRadius = "0";
nose.querySelector(".noUi-connect").style.height = "27px";

//стили для handle
nose.querySelector(".noUi-horizontal .noUi-handle-lower").style.width = "26px";
nose.querySelector(".noUi-horizontal .noUi-handle-lower").style.height = "26px";
nose.querySelector(".noUi-horizontal .noUi-handle-lower").style.top = "0";
nose.querySelector(".noUi-horizontal .noUi-handle-lower").style.background =
  "transparent";

// добавление стиля для полоски "upper"
nose.classList.add("nose-bgr");
