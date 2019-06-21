const date = document.getElementById('inputDate');
const month = document.getElementById('inputMonth');
const year = document.getElementById('inputYear');
const person = document.getElementById('typePerson');
const group = document.getElementById('typeGroup');
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const inputCounter = document.getElementById('inputCounter');
const totalPrice = document.getElementById('outputTotalPrice');

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const saturday = 5;
const sunday = 6;
const bulkQuantity = "10";
const minimumYear = 2009;
const currency = " грн.";
let monthsStr = "";
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

let dateOfYear = new Date();
let currentDate = dateOfYear.getFullYear();

for(currentDate; currentDate > minimumYear; currentDate--) {
    let option = document.createElement('option');
    option.innerHTML = currentDate;
    year.appendChild(option);
};

for(let a = 0; a < months.length; a++) {
    monthsStr += `<option value='${a}'>${months[a]}</option>`;
};
month.innerHTML = monthsStr;

function createDays() {
    date.innerHTML = "";
    let numDaysOfMonth = new Date(year.value, +month.value + 1, 0);

    for(let a = 1; a < numDaysOfMonth.getDate() + 1; a++) {
        let option = document.createElement('option');
        option.innerHTML = a;
        date.appendChild(option);
    };
};
createDays();

function events() {
    btnPlus.addEventListener('click', additionPrice);
    btnMinus.addEventListener('click', subtractionPrice);
    date.addEventListener('change', checkDayOfWeek);
    month.addEventListener('change', () => {
        checkDayOfWeek();
        createDays();
    });
    year.addEventListener('change', () => {
        checkDayOfWeek();
        createDays();
    });
    person.addEventListener('click', checkDayOfWeek);
    group.addEventListener('click', checkDayOfWeek);
};
events();

function checkDayOfWeek() {
    inputCounter.value = 1;
    let numDaysOfMonth = new Date(year.value, month.value, date.value);
    let utsDayOfWeek = numDaysOfMonth.getUTCDay();

    if(utsDayOfWeek === saturday || utsDayOfWeek === sunday) {
        checkGroupOrIndividualPrice(individualPrice.weekend, groupPrice.weekend);
    } else {
        checkGroupOrIndividualPrice(individualPrice.weeksDay, groupPrice.weeksDay);
    }
};
checkDayOfWeek();

function checkGroupOrIndividualPrice(individualPrice, groupPrice) {
    if(person.checked){
        finalCost = individualPrice;
        fixedFinalCost = individualPrice;
        setFinalCost(individualPrice);
    } else if(group.checked) {
        finalCost = groupPrice;
        fixedFinalCost = groupPrice;
        setFinalCost(groupPrice);
    }
};

function additionPrice () {
    ++inputCounter.value;
    finalCost += fixedFinalCost;
    chekBulkQuantity();
};

function chekBulkQuantity() {
    if(inputCounter.value === bulkQuantity) {
        choosesGroupPrice();
    }else {

        setFinalCost(finalCost);
    }
};

function choosesGroupPrice() {
    if(fixedFinalCost === individualPrice.weeksDay) {
        group.checked = true;
        fixedFinalCost = groupPrice.weeksDay;
        finalCost = groupPrice.weeksDay * bulkQuantity;
        setFinalCost(finalCost);
    }else if(fixedFinalCost === individualPrice.weekend) {
        group.checked = true;
        fixedFinalCost = groupPrice.weekend;
        finalCost = groupPrice.weekend * bulkQuantity;
        setFinalCost(finalCost);
    }else if(fixedFinalCost === groupPrice.weeksDay || fixedFinalCost === groupPrice.weekend) {
        setFinalCost(finalCost);
    }
};

function subtractionPrice () {
    if(inputCounter.value > 1) {
        inputCounter.value--;
        finalCost -= fixedFinalCost;
    }
    setFinalCost(finalCost);
};

function setFinalCost(price) {
    totalPrice.innerHTML = price + currency;
};