let $Date = document.getElementById('inputDate');
let $Month = document.getElementById('inputMonth');
let $Year = document.getElementById('inputYear');
let $Person = document.getElementById('typePerson');
let $Group = document.getElementById('typeGroup');
let $btnPlus = document.getElementById('btnPlus');
let $btnMinus = document.getElementById('btnMinus');
let $TotalPrice = document.getElementById('outputTotalPrice');

const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const saturday = 5;
const sunday = 6;
let individualPrice = {
    weeksDay: 50,
    weekend: 75
};
let groupPrice = {
    weeksDay: 45,
    weekend: 70
};

month.forEach( (value, index) => {
    let option = document.createElement('option');
    option.innerHTML = value;
    option.value = index + 1;
    $Month.appendChild(option);
});

let date = new Date();
let currentDate = date.getFullYear();

for(currentDate; currentDate > 2010; currentDate--) {
    let option = document.createElement('option');
    option.innerHTML = currentDate;
    $Year.appendChild(option);
};

$Month.onchange =  () => {
    checkNumDays();
};

$Year.onchange =  () => {
    checkNumDays();
};

$Date.onchange =  () => {
    checkDayOfWeek($Date.value);
};

function checkNumDays() {
    let numDaysOfMonth = new Date($Year.value, $Month.value, 0);

    createDays(numDaysOfMonth.getDate());

    console.log(numDaysOfMonth);
};

function createDays(dayOfMonth) {
    for(let a = 1; a < dayOfMonth + 1; a++) {
        let option = document.createElement('option');
        option.innerHTML = a;
        $Date.appendChild(option);
    };
};

function checkDayOfWeek(selectedDay) {
    let numDaysOfMonth = new Date($Year.value, $Month.value, selectedDay);
    let utsDayOfWeek = numDaysOfMonth.getUTCDay();

    if(utsDayOfWeek === saturday || utsDayOfWeek === sunday) {
        checkGroupOrIndividualPrice();
    } else {

    }

    console.log(numDaysOfMonth.getUTCDay());
};

function checkGroupOrIndividualPrice() {
    if($Person.checked){
        $TotalPrice.innerHTML = individualPrice.weekend;
    } else if($Group.checked) {
        $TotalPrice.innerHTML = individualPrice.weeksDay;
    }
};

