// nav start


// navigation start

function navbtnclick(){
  document.querySelector('.navlist').classList.toggle('show');
  document.querySelector('.navbtn').classList.toggle('navbutton');
}
// navigation end

// nav end




// banner start

// typing
'use strict';

let type = document.querySelector('.typing');

let typelist = ['Shakhawat Hossain','Font-end Developer', 'Web developer', 'Freelancer'];

let index = -1;
let current = 0;

function typeTextFunc() {
    if (current === typelist.length) {
        current = 0;
    }
    let typeText = setInterval(() => {
        if (index == typelist[current].length - 1) {
            clearInterval(typeText);
            clearTextFunc();
        } else {
            index++;
            type.textContent += typelist[current][index];
        }
    }, 150);
};

function clearTextFunc() {
    let clearText = setInterval(() => {
        if (type.textContent.length == 0) {
            clearInterval(clearText);
            index = -1;
            current++
            typeTextFunc();
        } else {
            type.textContent = type.textContent.slice(0, -1)
        }
    }, 150);
};

typeTextFunc();



// bnr clock+date start
let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let weeklyday = document.querySelector(".weeklyday");

setInterval(() => {
  const currentTime = new Date();

  weeklyday.innerHTML = Intl.DateTimeFormat("default", {
    weekday: "long",
  }).format(currentTime);
  
  day.innerHTML = currentTime.getDate();
  month.innerHTML = Intl.DateTimeFormat("default", {
    month: "long",
  }).format(currentTime);

  year.innerHTML = currentTime.getFullYear();
}, 1000);


function mytime(){
  let date = new Date();
  let hour = date.getHours(); // 0 - 23
  let munites = date.getMinutes(); // 0 - 59
  let second = date.getSeconds(); // 0 - 59
  let formate = "AM";
  
  if(hour == 0){
    hour = 12;
  }
  
  if(hour > 12){
    hour = hour - 12;
    formate = "PM";
  }
  
  hour = (hour < 10) ? "0" + hour : hour;
  munites = (munites < 10) ? "0" + munites : munites;
  second = (second < 10) ? "0" + second : second;
  
  let time = hour + ":" + munites + ":" + second + " " + formate;
  document.querySelector("#timing").innerText = time;
  document.querySelector("#timing").textContent = time;
  
  setTimeout(mytime, 1000);
  
}
mytime();
// bnr clock+date end

// banner end

