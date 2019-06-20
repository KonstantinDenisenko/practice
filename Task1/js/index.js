let $Date = document.getElementById('inputDate');
let $Month = document.getElementById('inputMonth');
let $Year = document.getElementById('inputYear');
let $Person = document.getElementById('typePerson');
let $Group = document.getElementById('typeGroup');
let $btnPlus = document.getElementById('btnPlus');
let $btnMinus = document.getElementById('btnMinus');
let $inputCounter = document.getElementById('inputCounter');
let $TotalPrice = document.getElementById('outputTotalPrice');

const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const saturday = 5;
const sunday = 6;
const minimumYear = 2009;
let currency = " грн.";
let finalCost;
let fixedFinalCost;
let individualPrice = {
    weeksDay: 50,
    weekend: 75
};
let groupPrice = {
    weeksDay: 45,
    weekend: 70
};

let date = new Date();
let currentDate = date.getFullYear();

for(currentDate; currentDate > minimumYear; currentDate--) {
    let option = document.createElement('option');
    option.innerHTML = currentDate;
    $Year.appendChild(option);
};

month.forEach( (value, index) => {
    let option = document.createElement('option');
    option.innerHTML = value;
    option.value = index;
    $Month.appendChild(option);
});

createDays();

function createDays() {
    $Date.innerHTML = "";
    let numDaysOfMonth = new Date($Year.value, +$Month.value + 1, 0);

    for(let a = 1; a < numDaysOfMonth.getDate() + 1; a++) {
        let option = document.createElement('option');
        option.innerHTML = a;
        $Date.appendChild(option);
    };
};

$Date.onchange =  () => {
    checkDayOfWeek();
};

$Month.onchange =  () => {
    checkDayOfWeek();
    createDays();
};

$Year.onchange =  () => {
    checkDayOfWeek();
    createDays();
};

$Person.addEventListener('click', () => {
    checkDayOfWeek();
});

$Group.addEventListener('click', () => {
    checkDayOfWeek();
});

checkDayOfWeek();

function checkDayOfWeek() {
    $inputCounter.value = 1;
    let numDaysOfMonth = new Date($Year.value, $Month.value, $Date.value);
    let utsDayOfWeek = numDaysOfMonth.getUTCDay();

    if(utsDayOfWeek === saturday || utsDayOfWeek === sunday) {
        checkGroupOrIndividualPrice(individualPrice.weekend, groupPrice.weekend);
    } else {
        checkGroupOrIndividualPrice(individualPrice.weeksDay, groupPrice.weeksDay);
    }
};

function checkGroupOrIndividualPrice(individualPrice, groupPrice) {
    if($Person.checked){
        finalCost = individualPrice;
        fixedFinalCost = individualPrice;
        setFinalCost(individualPrice);
    } else if($Group.checked) {
        finalCost = groupPrice;
        fixedFinalCost = groupPrice;
        setFinalCost(groupPrice);
    }
};

$btnPlus.addEventListener('click', () => {
    ++$inputCounter.value;
    finalCost += fixedFinalCost;
    setFinalCost(finalCost);
});

$btnMinus.addEventListener('click', () => {
    if($inputCounter.value > 1) {
        $inputCounter.value--;
        finalCost -= fixedFinalCost;
    }
    setFinalCost(finalCost);
});

function setFinalCost(price) {
    $TotalPrice.innerHTML = price + currency;
};