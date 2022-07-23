"use strict";
let time = document.querySelectorAll(".main__time>span");
let listNav = document.querySelectorAll("#list>li");

// Nav - Article
for (let i = 0; i < listNav.length; i++) {
  listNav[i].addEventListener("click", () => {
    let ativo = document.getElementsByClassName("active");

    ativo[0].className = ativo[0].className.replace(" active", "");
    listNav[i].classList.add("active");
  });
}

// Time
time.forEach((dates) => {
  let dateNow = new Date();
  let data = dates.dataset.time;
  if (data == "week") {
    DayWeeks(dateNow);
  }
  if (data == "day") {
    Day(dateNow);
  }
  if (data == "time") {
    Timer();
  }
});

// Config Day
function DayWeeks(date) {
  const daysWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  let dayWeek = daysWeek[date.getDay()];
  document.querySelector("[data-time=week]").textContent = dayWeek;
}

function Day(date) {
  let dia = date.getDate().toString(),
    mes = (date.getMonth() + 1).toString(),
    ano = date.getFullYear(),
    diaF = dia.length == 1 ? "0" + dia : dia,
    mesF = mes.length == 1 ? "0" + mes : mes,
    dateF = `${diaF}/${mesF}/${ano}`;
  document.querySelector("[data-time=day]").textContent = dateF;
}

// Config Time
function Timer() {
  let date = new Date();
  let hora = date.getHours().toString(),
    min = date.getMinutes().toString(),
    seg = date.getSeconds().toString(),
    horaF = hora.length == 1 ? "0" + hora : hora,
    minF = min.length == 1 ? "0" + min : min,
    segF = seg.length == 1 ? "0" + seg : seg,
    timeF = `${horaF}:${minF}:${segF}`;
  document.querySelector("[data-time=time]").textContent = timeF;
}
setInterval(() => {
  Timer();
}, 1000);

// Mode Light/Dark
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.getElementsByClassName("main")[0].classList.toggle("light");
});
