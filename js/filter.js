//Выпадающий список
const nameGroup = document.querySelectorAll("h3.filter__nameGroup > svg");
const lists = document.querySelectorAll("ul.filter__ul");

nameGroup[0].onclick = function () {
  nameGroup[0].classList.toggle("rotate");
  lists[0].classList.toggle("filter__ul__show");
};

nameGroup[1].onclick = function () {
  nameGroup[1].classList.toggle("rotate");
  lists[1].classList.toggle("filter__ul__show");
};

nameGroup[2].onclick = function () {
  nameGroup[2].classList.toggle("rotate");
  lists[2].classList.toggle("filter__ul__show");
};

//Резельтат нажатия checkbox
const check = document
  .querySelector(".filter")
  .querySelectorAll("input[type=checkbox]");

check.forEach((el) => {
  el.addEventListener("change", () => {
    if (el.checked) {
      const parrent = document.getElementById("filterResult"); //ищем контейнер
      const newDiv = document.createElement("div"); //создаем DIV
      const newDivImg = document.createElement("div");
      const textInput = document.createTextNode(el.name); //текст копируем из атрибута name
      newDiv.id = el.name; // добавляем id из атрибута name
      newDiv.className = "newFilterResult"; //добавляем DIV класс
      newDivImg.className = "close"; // добавляем DIV класс
      newDiv.appendChild(textInput); // добавляем текст в DIV
      newDiv.appendChild(newDivImg);
      parrent.appendChild(newDiv); // добавляем DIV в контейнер
    } else {
      const parrent = document.getElementById("filterResult");
      const div = document.getElementById(el.name);
      parrent.removeChild(div);
    }
  });
});

if (check.checked) {
  document.getElementsByClassName("filter__ul__li__label");
}

//Результат нажатия на кнопку Close (х)
check.forEach((el) => {
  el.addEventListener("change", () => {
    if (el.checked) {
      const divId = document.getElementById(el.name);
      const img = divId.querySelector(".close");
      img.addEventListener("click", () => {
        el.checked = false;
        const parrent = document.getElementById("filterResult");
        const div = document.getElementById(el.name);
        parrent.removeChild(div);
      });
    }
  });
});
