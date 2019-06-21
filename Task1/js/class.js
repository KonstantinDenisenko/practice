function Form() {
    this.date = document.getElementById('inputDate');
    this.month = document.getElementById('inputMonth');
    this.year = document.getElementById('inputYear');
    this.person = document.getElementById('typePerson');
    this.group = document.getElementById('typeGroup');
    this.btnPlus = document.getElementById('btnPlus');
    this.btnMinus = document.getElementById('btnMinus');
    this.inputCounter = document.getElementById('inputCounter');
    this.totalPrice = document.getElementById('outputTotalPrice');

    this.months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    this.saturday = 5;
    this.sunday = 6;
    this.bulkQuantity = "10";
    this.minimumYear = 2009;
    this.currency = " грн.";
    this.monthsStr = "";
    this.daysStr = "";
    this.finalCost = "";
    this.fixedFinalCost = "";
    this.individualPrice = {
        weeksDay: 50,
        weekend: 75
    };
    this.groupPrice = {
        weeksDay: 45,
        weekend: 70
    };

    this.dateOfYear = new Date();
    this.currentDate = this.dateOfYear.getFullYear();

    for(this.currentDate; this.currentDate > this.minimumYear; this.currentDate--) {
        this.daysStr += `<option>${this.currentDate}</option>`;
    };
    this.year.innerHTML = this.daysStr;

    for(let a = 0; a < this.months.length; a++) {
        this.monthsStr += `<option value='${a}'>${this.months[a]}</option>`;
    };
    this.month.innerHTML = this.monthsStr;

    this.createDays = () => {
        this.date.innerHTML = "";
        this.numDaysOfMonth = new Date(this.year.value, +this.month.value + 1, 0);

        for(let a = 1; a < this.numDaysOfMonth.getDate() + 1; a++) {
            this.option = document.createElement('option');
            this.option.innerHTML = a;
            this.date.appendChild(this.option);
        };
    };

    this.events = () => {
        this.btnPlus.addEventListener('click', this.additionPrice);
        this.btnMinus.addEventListener('click', this.subtractionPrice);
        this.date.addEventListener('change', this.checkDayOfWeek);
        this.month.addEventListener('change', () => {
            this.checkDayOfWeek();
            this.createDays();
        });
        this.year.addEventListener('change', () => {
            this.checkDayOfWeek();
            this.createDays();
        });
        this.person.addEventListener('click', this.checkDayOfWeek);
        this.group.addEventListener('click', this.checkDayOfWeek);
    };

    this.checkDayOfWeek = () => {
        this.inputCounter.value = 1;
        this.numDaysOfMonth = new Date(this.year.value, this.month.value, this.date.value);
        this.utsDayOfWeek = this.numDaysOfMonth.getUTCDay();

        if(this.utsDayOfWeek === this.saturday || this.utsDayOfWeek === this.sunday) {
            this.checkGroupOrIndividualPrice(this.individualPrice.weekend, this.groupPrice.weekend);
        } else {
            this.checkGroupOrIndividualPrice(this.individualPrice.weeksDay, this.groupPrice.weeksDay);
        }
    };

    this.checkGroupOrIndividualPrice = (individualPrice, groupPrice) => {
        if(this.person.checked){
            this.finalCost = individualPrice;
            this.fixedFinalCost = individualPrice;
            this.setFinalCost(this.finalCost);
        } else if(this.group.checked) {
            this.finalCost = groupPrice;
            this.fixedFinalCost = groupPrice;
            this.setFinalCost(this.finalCost);
        }
    };

    this.additionPrice = () => {
        ++this.inputCounter.value;
        this.finalCost += this.fixedFinalCost;
        this.chekBulkQuantity();
    };

    this.chekBulkQuantity = () => {
        if(this.inputCounter.value === this.bulkQuantity) {
            this.choosesGroupPrice();
        }else {

            this.setFinalCost(this.finalCost);
        }
    };

    this.choosesGroupPrice = () => {
        if(this.fixedFinalCost === this.individualPrice.weeksDay) {
            this.group.checked = true;
            this.fixedFinalCost = this.groupPrice.weeksDay;
            this.finalCost = this.groupPrice.weeksDay * this.bulkQuantity;
            this.setFinalCost(this.finalCost);
        }else if(this.fixedFinalCost === this.individualPrice.weekend) {
            this.group.checked = true;
            this.fixedFinalCost = this.groupPrice.weekend;
            this.finalCost = this.groupPrice.weekend * this.bulkQuantity;
            this.setFinalCost(this.finalCost);
        }else if(this.fixedFinalCost === this.groupPrice.weeksDay || this.fixedFinalCost === this.groupPrice.weekend) {
            this.setFinalCost(this.finalCost);
        }
    };

    this.subtractionPrice = () => {
        if(this.inputCounter.value > 1) {
            this.inputCounter.value--;
            this.finalCost -= this.fixedFinalCost;
        }
        this.setFinalCost(this.finalCost);
    };

    this.setFinalCost = (price) => {
        this.totalPrice.innerHTML = price + this.currency;
    };
};

let form = new Form();
form.createDays();
form.events();
form.checkDayOfWeek();
