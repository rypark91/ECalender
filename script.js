var dayGrid = document.getElementsByClassName("box");
var monthName = document.querySelector("#month");
var body = document.querySelector("body");




var cal = new Date();
var month = Number(cal.getMonth());
//var month = 11;
var maxDays = 0;
if(month == 0){
    body.classList.add("january");
    monthName.textContent = "January";
    maxDays = 31;
}
else if(month == 1){
    body.classList.add("february");
    monthName.textContent = "February";
    if(Number(cal.getFullYear()) % 4 == 0){
        maxDays = 29;
    }
    else{
        maxDays = 28;
    }
}
else if(month == 2){
    body.classList.add("march");
    monthName.textContent = "March";
    maxDays = 31;
}
else if(month == 3){
    body.classList.add("april");
    monthName.textContent = "April";
    maxDays = 30;
}
else if(month == 4){
    body.classList.add("may");
    monthName.textContent = "May";
    maxDays = 31;
}
else if(month == 5){
    body.classList.add("june");
    monthName.textContent = "June";
    maxDays = 30;
}
else if(month == 6){
    body.classList.add("july");
    monthName.textContent = "July";
    maxDays = 31;
}
else if(month == 7){
    body.classList.add("august");
    monthName.textContent = "August";
    maxDays = 31;
}
else if(month == 8){
    body.classList.add("september");
    monthName.textContent = "September";
    maxDays = 30;
}
else if(month == 9){
    body.classList.add("october");
    monthName.textContent = "October";
    maxDays = 31;
}
else if(month == 10){
    body.classList.add("november");
    monthName.textContent = "November";
    maxDays = 30;
}
else if(month == 11){
    body.classList.add("december");
    monthName.textContent = "December";
    maxDays = 31;
}

var day = Number(cal.getDay());
var dayNumber = Number(cal.getDate());
var dayFixed = dayNumber % 7;
if(day == 0){
    day = 7;
}

var adjustNumber = dayFixed - 1;
var finalDay = day - adjustNumber;
if(finalDay < 0){
    finalDay += 7;
}

console.log(cal.getDay());

console.log(finalDay);
console.log(cal.getFullYear())

var it = 1;

while(it <= maxDays){
    dayGrid[finalDay++].textContent = it++;
    if(it == cal.getDate()){
        dayGrid[finalDay].style.background = "yellowgreen";
    }
}
var nextDays = 1;
while(finalDay <= 34){
    dayGrid[finalDay++].innerHTML = `<sup>${nextDays++}</sup>`;
}