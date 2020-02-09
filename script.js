/*
function hello() {
  console.log("Hello");
  hello2();
  alert('работает')
}
function hello2() {
   // console.log('bla bla bla');
}*/

function hello() {
  alert("работает");
}

let btn = document.querySelector("#btn");
btn.onclick = hello;

//-----------------открывваем модалку
let modalShow = document.querySelector("#modal-show");

function openModal() {
  let modal = document.querySelector(".modal");
  modal.hidden = false;
  if (modal.style.backgroundColor = "green") {
    modal.style.backgroundColor = "green";
  }
   modal.style.transition = '900ms';
  this.style.backgroundColor = "green";
}
modalShow.onclick = openModal;

//-----------Закрываем модалку
let modalClose = document.querySelector("#modal-close");

function closeModal() {
  let modal = document.querySelector(".modal");
  modal.hidden = true;

  if (this.style.backgroundColor != "red") {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "black";
  }
}
modalClose.onclick = closeModal;
