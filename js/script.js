var writeUsButton = document.querySelector(".write-us-button");
var writeUsPopup = document.querySelector(".modal-contacts");
var formClose = document.querySelector(".form-close");
var form = writeUsPopup.querySelector("form");
var formName = writeUsPopup.querySelector("[name=name]");
var formEmail = writeUsPopup.querySelector("[name=email]");

var storage = localStorage.getItem("name");

var staticMap = document.querySelector(".st-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close");

//Карта начало

staticMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

//Карта конец

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (storage) {
    formName.value = storage;
    formEmail.focus();
  } else {
    formName.focus();
  }
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!formName.value || !formEmail.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", formName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    } else if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
