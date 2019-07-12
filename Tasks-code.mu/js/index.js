(function () {
    //1
    // let str = "Hi";
    // console.log("'" + str[0] + "', " + "'" + str[1] + "'");
    //
    // ////////////////////////////////////////////////////////
    // //2
    //
    // function countSecInHours() {
    //     let secInMinut = 60;
    //     let minInHours = 60;
    //     let secInHours = secInMinut * minInHours;
    //     console.log(secInHours);
    // }
    // countSecInHours();
    //
    // ////////////////////////////////////////////////////////
    // //3
    //
    // let num = 1;
    // num += 12;
    // num -= 14;
    // num *= 5;
    // num /= 7;
    // num++;
    // num--;
    // console.log(num);
    //
    // ////////////////////////////////////////////////////////
    // //4
    //
    // let num = 3;
    // alert(num);
    //
    // ////////////////////////////////////////////////////////
    // //5
    //
    // function operation() {
    //     let a = 10;
    //     let b = 2;
    //     console.log(a + b);
    //     console.log(a - b);
    //     console.log(a * b);
    //     console.log(a / b);
    // };
    // operation();

    // ////////////////////////////////////////////////////////
    // //6
    // function sum() {
    //   let c = 15;
    //   let d = 2;
    //   let resulr = c + d;

    //   return result;
    // };
    // console.log(sum());

    // ////////////////////////////////////////////////////////
    // //7

    // let a = 10;
    // let b = 2;
    // let c = 5;
    // console.log(a + b + c);

    // ////////////////////////////////////////////////////////
    // //8

    // let a = 17;
    // let b = 10;
    // let c = a - b;
    // let d = 7;
    // let result = c + d;
    // console.log(result);

    // ////////////////////////////////////////////////////////
    // //9

    // let str = "Hello, world";
    // console.log(str);

    // ////////////////////////////////////////////////////////
    // //10

    // let str1 = "Hello";
    // let str2 = "world!";
    // console.log(str1 + ", " + str2);

    // ////////////////////////////////////////////////////////
    // //11

    // let name = "Konstantin";
    // console.log("Hello, " + name);

    // ////////////////////////////////////////////////////////
    // //12

    // let age = 28;
    // console.log("I'm " + age);

    // ////////////////////////////////////////////////////////
    // //13

    // let name = prompt('What is your name?', "");
    // console.log("Your name is - " + name);

    // ////////////////////////////////////////////////////////
    // //14

    // let  number = prompt('Pleace write any number', "8");
    // console.log(number * number);

    // ////////////////////////////////////////////////////////
    // //15

    // let str = "abcde";
    // function search() {
    //     if(str.indexOf("a") >= 0) {
    //         console.log("a");
    //     }
    //     if(str.indexOf("c") >= 0) {
    //         console.log("c");
    //     }
    //     if(str.indexOf("e") >= 0) {
    //         console.log("e");
    //     }
    //     console.log(str[0] + " " + str[2] + " " + str[4]);
    // };
    // search();

    // ////////////////////////////////////////////////////////
    // //16

    // let num = "1s23d45";
    // let sum = 1;
    //
    // function multiplication() {
    //     num.split("").forEach((e) => {
    //         if(+e) {
    //             sum *= +e;
    //         }
    //     });
    // };
    // multiplication();
    //
    // console.log(sum);

    // ////////////////////////////////////////////////////////
    // //17

    // let secInMinute = 60;
    // let minInHours = 60;
    // let hoursInDay = 24;
    // let daysOfMonth = 30;
    // let secInHours = secInMinute * minInHours;
    // let secInDay = secInHours * hoursInDay;
    // let secInMonth = secInDay * daysOfMonth;
    //
    // console.log(`В одном часе - ${secInHours}c, В сутках - ${secInDay}c, В одном месяце ${secInMonth}c`);

    // ////////////////////////////////////////////////////////
    // //18

    // let date = new Date();
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // console.log(`${hours}:${minutes}:${seconds}`);

    // ////////////////////////////////////////////////////////
    // //19

    // let array = ['Hello ', 'world', '!'];
    // let str = "";
    //
    // array.forEach((e) => {
    //     str += e;
    // });
    //
    // console.log(str);

    // ////////////////////////////////////////////////////////
    // //20

    // let obj = {
    //     'Bob': 800,
    //     'Jim': 700,
    //     'Mike': 500
    // };
    // console.log(`${obj['Bob']} ${obj['Mike']}`);

    // ////////////////////////////////////////////////////////
    // //21

    // let array1 = [1, 2, 3, 4, 5];
    //
    // let array2 = [];
    // array2.push(1);
    // array2.push(2);
    // array2.push(3);
    // array2.push(4);
    // array2.push(5);
    //
    // let array3 = [];
    // array3[0] = 1;
    // array3[2] = 2;
    // array3[3] = 3;
    // array3[4] = 4;
    // array3[5] = 5;

    // ////////////////////////////////////////////////////////
    // //22

    // let array = {
    //     'ru': ['голубой', 'красный', 'зелёный'],
    //     'en': ['blue', 'red', 'green']
    // };
    // console.log(array['ru'][0]);

    // ////////////////////////////////////////////////////////
    // //23

    // let array = ['a', 'b', 'c'];
    // array.forEach((e) => {
    //     console.log(e);
    // });

    // ////////////////////////////////////////////////////////
    // //24

    // let array = ['a', 'b', 'c', 'd'];
    // console.log(`${array[0]}+${array[1]}, ${array[2]}+${array[3]}`);

    // ////////////////////////////////////////////////////////
    // //25

    // let array = [2, 5, 3, 9];
    // let sum1 = array[0] + array[1];
    // let sum2 = array[2] + array[3];
    // let result = sum1 + sum2;
    // console.log(result);

    // ////////////////////////////////////////////////////////
    // //26

    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // };
    // console.log(obj.c);
    // console.log(obj['c']);

    // ////////////////////////////////////////////////////////
    // //27

    // let obj = {
    //     kolya: '1000',
    //     vasia: '500',
    //     petya: '200'
    // };
    //
    // console.log(obj.petya + ' and ' + obj.kolya);

    // ////////////////////////////////////////////////////////
    // //28

    // let obj = {
    //     1: "Понедельник",
    //     2: "Вторник",
    //     3: "Среда",
    //     4: "Четверг",
    //     5: "Пятница",
    //     6: "Суббота",
    //     0: "Воскресенье"
    // };
    // let date = new Date();
    //
    // for(let key in obj) {
    //     if(Number(key) === date.getUTCDay()) {
    //         console.log(obj[key]);
    //     }
    // }

    // ////////////////////////////////////////////////////////
    // //29

    // let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // console.log(array[1][0]);

    // ////////////////////////////////////////////////////////
    // //30

    // let obj = {
    //     js:['jQuery', 'Angular'],
    //     php: 'hello', css: 'world'
    // };
    // console.log(obj.js[0]);

    // ////////////////////////////////////////////////////////
    // //31

    // let obj = {
    //     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    //     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    // };
    //
    // let leng = "ru";
    // let day = 3;
    //
    // console.log(obj[leng][day]);

    // ////////////////////////////////////////////////////////
    // //32

    // let num = 10;
    // if (num === 10) {
    //     console.log('Верно');
    // } else {
    //     console.log('Неверно');
    // }

    // ////////////////////////////////////////////////////////
    // //33

    // function findParthOfHours(min) {
    //     if (min >= 0 && min <= 14) {
    //         return('В первую четверть.');
    //     }
    //     if (min >= 15 && min <= 30) {
    //         return('Во вторую четверть.');
    //     }
    //     if (min >= 31 && min <= 45) {
    //         return('В третью четверть.');
    //     }
    //     if (min >= 46 && min <= 59) {
    //         return('В четвертую четверть.');
    //     }
    // };
    // let parth = findParthOfHours(55);
    // console.log(parth);

    // ////////////////////////////////////////////////////////
    // //34

    // let lang1 = 'ru';
    // let array1;
    // if (lang1 === 'ru') {
    //     array1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    // }
    // if (lang1 === 'en') {
    //     array1 = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    // }
    // console.log(array1);
    //
    //
    // let lang2 = 'en';
    // let array2;
    // switch (lang2) {
    //     case 'ru':
    //         array2 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    //         break;
    //     case 'en':
    //         array2 = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    //         break;
    // }
    // console.log(array2);
    //
    //
    // let lang3 = 'ru';
    // let array3 = {
    //     'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
    //     'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
    // };
    // console.log(array3[lang3]);

    // ////////////////////////////////////////////////////////
    // //35

    // let a = 0;
    //
    // if(a === 0) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // if(a > 0) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // if(a < 0) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // if(a >= 0) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // if(a <= 0) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // if(a !== 0) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // if(a === "test") {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // if(a === 1) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }

    // ////////////////////////////////////////////////////////
    // //36

    // let test = true;
    //
    // if(test) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // let check = test ? "Верно!" : "Неверно!";
    //
    // console.log(check);

    // ////////////////////////////////////////////////////////
    // //37

    // let test = true;
    //
    // if(!test) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }
    //
    // let check = !test ? "Верно!" : "Неверно!";
    //
    // console.log(check);

    // ////////////////////////////////////////////////////////
    // //38

    // let a = 2;
    //
    // if(a > 0 && a < 5) {
    //     console.log("Верно!");
    // }else {
    //     console.log("Неверно!");
    // }

    ///////////////////////////////////////////////////////
    // //39

    // let a = 5;
    //
    // if(a === 0 || a === 2) {
    //     a += 7;
    // }else {
    //     a /= 10;
    // }
    // console.log(a);

    ///////////////////////////////////////////////////////
    // //40

    // let b = 3;
    // let c = 5;
    //
    // if(b <= 1 || c >= 3) {
    //     console.log(b+c);
    // }else {
    //     console.log(b-c);
    // }

    ///////////////////////////////////////////////////////
    // //41

    // let num = 3;
    // let result;
    //
    // switch (num) {
    //     case 1:
    //         result = "Зима";
    //         break;
    //     case 2:
    //         result = "Весна";
    //         break;
    //     case 3:
    //         result = "Лето";
    //         break;
    //     case 4:
    //         result = "Осень";
    //         break;
    // };
    //
    // console.log(result);

    ///////////////////////////////////////////////////
    // //42

    // let day = 15;
    //
    // function findParthOfSeason(day) {
    //     if (day >= 0 && day <= 10) {
    //         return('В первую декаду.');
    //     }
    //     if (day >= 11 && day <= 20) {
    //         return('Во вторую декаду.');
    //     }
    //     if (day >= 21 && day <= 31) {
    //         return('В третью декаду.');
    //     }
    // };
    // console.log(findParthOfSeason(day));

    ///////////////////////////////////////////////////
    // //43

    // let month = 8;
    //
    // function findParthOfSeason(month) {
    //     if (month === 1 || month === 2 || month === 12) {
    //         return('Пора года: ЗИМА');
    //     }
    //     if (month >= 3 && month <= 5) {
    //         return('Пора года: ВЕСНА');
    //     }
    //     if (month >= 6 && month <= 8) {
    //         return('Пора года: ЛЕТО');
    //     }
    //     if (month >= 9 && month <= 11) {
    //         return('Пора года: ОСЕНЬ');
    //     }
    // };
    // console.log(findParthOfSeason(month));

    ///////////////////////////////////////////////////
    // //44

    // let str = "abcde";
    //
    // function checkStr(str) {
    //     if(str.substring(0,1) === 'a') {
    //         console.log("YES");
    //     }else {
    //         console.log('NO');
    //     }
    // };
    // checkStr(str);

    ///////////////////////////////////////////////////
    // //45

    // let str = "12345";
    //
    // function checkStr(str) {
    //     str = str.split('');
    //     if (+str[0]) {
    //         console.log('YES');
    //     } else {
    //         console.log('NO');
    //     }
    // };
    // checkStr(str);

    ///////////////////////////////////////////////////
    // //46

    // let str = "123";
    // let result = 0;
    //
    // str.split('').forEach((e) => {
    //    result += +e;
    // });
    // console.log(result);

    ///////////////////////////////////////////////////
    // //47

    // let str = "123123";
    //
    // function checkSum(array) {
    //     let sum1 = array[0] + array[1] + array [2];
    //     let sum2 = array[3] + array[4] + array [5];
    //
    //     if(sum1 === sum2) {
    //         console.log('YES');
    //     }else {
    //         console.log('NO');
    //     }
    // };
    // checkSum(str.split(''));

    ///////////////////////////////////////////////////
    // //48

    // let array = [1, 2, 3, 4, 5];
    //
    // for(let a = 0; a < array.length; a++) {
    //     console.log(array[a]);
    // }

    ///////////////////////////////////////////////////
    // //49

    // let array = [2, 3, 4, 5];
    // let sum = 1;
    //
    // for(let a = 0; a < array.length; a++) {
    //     sum *= array[a];
    // };
    // console.log(sum);

    ///////////////////////////////////////////////////
    // //50

    // var obj = {
    //     'Minsk': 'Беларусь',
    //     'Moscow': 'Россия',
    //     'Kyiv': 'Украина'
    // };
    //
    // for (let key in obj) {
    //     console.log(`${key} - это ${obj[key]}`);
    // }

    ///////////////////////////////////////////////////
    // //51

    // let array = [1, 2, -3, 5, -2];
    // let sum = 0;
    //
    // let filterArray = array.filter((number) => number > 0);
    // filterArray.forEach((e) => {
    //    sum += e;
    // });
    // console.log(sum);

    ///////////////////////////////////////////////////
    // //52

    // let array = [10, 20, 30, 50, 235, 3000];
    //
    // function checkFirtstNum(array) {
    //     array.forEach((e) => {
    //         let str = String(e);
    //         if(str.substring(0,1) === '1' || str.substring(0,1) === '2' || str.substring(0,1) === '5') {
    //             console.log(e);
    //         }
    //     });
    // };
    // checkFirtstNum(array);

    ///////////////////////////////////////////////////
    // //53

    // let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    // let date = new Date();
    //
    // daysOfWeek.forEach((e, index) => {
    //     if(date.getUTCDay() === index) {
    //         document.write(`<em>${e}</em><br>`);
    //     }else {
    //         document.write(`${e}<br>`);
    //     }
    // });

    ///////////////////////////////////////////////////
    // //54

    // let n = 1000;
    // const number = 2;
    // let num = 0;
    //
    // function check1() {
    //   n /= number;
    //   num++;
    //     function check2() {
    //         if(n > 50) {
    //             check1();
    //         }
    //     }
    //     check2();
    // };
    // check1();
    //
    // console.log(`${n} - ${num}`);

    ///////////////////////////////////////////////////
    // //55

    // let a = 10;
    // let b = 3;
    //
    // function dividing(a, b) {
    //     return a % b;
    // };
    // console.log(dividing(a, b));

    ///////////////////////////////////////////////////
    // //56

    // console.log(Math.pow(2, 10));
    // console.log( Math.sqrt(245) );
    // console.log( Math.round(Math.sqrt(245)) );
    // console.log( Math.ceil(Math.sqrt(245)) );
    // console.log( Math.floor(Math.sqrt(245)) );
    // console.log( Math.max(4, -2, 5, 19, -130, 0, 10) );
    // console.log( Math.min(4, -2, 5, 19, -130, 0, 10) );
    // console.log(
    //     (function getRandomInt() {
    //         return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    //     })()
    // );

    ///////////////////////////////////////////////////
    // //57

    // let str = 'aaa@bbb@ccc';
    // console.log(str.replace(/@/g, '!'));
    //
    // let str1 = 'aaa bbb ccc';
    //
    // console.log(str1.replace(/bbb/g, ''));
    // console.log(str1.substr(4, 3));
    // console.log(str1.substring(4, 7));
    // console.log(str1.slice(4, 7));
    //
    // let str2 = '2025-12-31';
    // let array = str2.split('-');
    // let str3 = `${array[2]}/${array[1]}/${array[0]}`;
    // console.log(str3);

    ///////////////////////////////////////////////////
    // //58

    // let str1 = 'dsdsd_js_react_';
    //
    // console.log( str1.substring( str1.indexOf('_') + 1 ) );
    // //console.log( str1.replace(/^(.+?_)/g );
    //
    // console.log(str1.toUpperCase());
    // console.log(str1.toLowerCase());

    ///////////////////////////////////////////////////
    // //59

    // let str2 = 'я учу javascript!';
    //
    // console.log(str2.replace(/\s/g, '').length);
    // console.log(str2.substr(1, 16));
    // console.log(str2.substring(1, str2.length));
    // console.log(str2.slice(1, str2.length));
    // console.log(str2.indexOf('учу'));

    ///////////////////////////////////////////////////
    // //60

    // let str = "Hello my fried, i want to tell you about JS";
    //
    // function checkLengthStr(str) {
    //     let result= "";
    //     let number = 20;
    //
    //     if(str.length > number) {
    //         return result = str.slice(0, number) + '...';
    //     }else {
    //         return result = str;
    //     }
    // };
    // ;
    // console.log(checkLengthStr(str));

    ///////////////////////////////////////////////////
    // //61

    // let str = 'Я-учу-javascript!';
    //
    // console.log(str.replace(/-/g, '!'));
    //
    // let str1 = 'я учу javascript!';
    //
    // console.log(str1.split(' '));
    // console.log(str1.replace(/\s/g, '').split(''));
    //
    // let str2 = '2025-12-31';
    // let str3 = str2.split('-');
    // let str4 = `${str3[2]}.${str3[1]}.${str3[0]}`;
    // console.log(str4);

    ///////////////////////////////////////////////////
    // //62

    // let array = ['я', 'учу', 'javascript', '!'];
    // console.log(array.join(" ").charAt(0).toUpperCase() + array.join(" ").slice(1));
    //
    //
    // let a = ['a', 'b', 'c'];
    // let b = [1, 2, 3];
    //
    // let c = a.concat(b);
    // console.log(c);
    //
    // let c = b.concat(a);
    // console.log(c);
    //
    // let arr = ['a', 'b', 'c'];
    // arr.push(1, 2, 3);
    // console.log(arr);

    ///////////////////////////////////////////////////
    // //63     Class

    // class User {
    //     constructor(a, b) {
    //         this.firstName = "Vasya";
    //         this.lastName = "Pypkin";
    //         this.a = a;
    //         this.b = b;
    //     }
    //
    //     get fullName() {
    //         return `${this.a} ${this.b}`;
    //     }
    //
    //     set fullName(newValue) {
    //         if(typeof newValue === "string") {
    //             [this.a, this.b] = newValue.split(" ");
    //         }else {
    //             [this.a, this.b] = newValue;
    //         }
    //     }
    //
    //     ["test".toUpperCase()]() {
    //         console.log("PASSED!");
    //     }
    // };
    // let user = new User("Вася", "Пупков");
    // console.log( user.fullName );
    // user.fullName = ["Иван", "Петров"];
    // console.log( user.fullName );
    // user.fullName = "Другой Персонаж";
    // console.log( user.fullName );
    // user.TEST();
    //
    // class Test extends User {
    //     constructor(a, b) {
    //         super(a, b);
    //         this.firstName = "Petia";
    //         this.lastName = "Petrovich";
    //     }
    //     someMethod() {
    //         console.log(`${this.firstName} ${this.lastName}`)
    //     }
    // };
    //
    // let test = new Test('firstName', 'lastName');
    // console.log(test.fullName);
    // test.someMethod();

    ///////////////////////////////////////////////////
    // //64    bind

    // function bind(func, context) {
    //     return function() {
    //         return func.apply(context);
    //     };
    // }

    // let user = {
    //     firstName: "Вася",
    //     sayHi() {
    //         console.log( this.firstName );
    //     }
    // };
    //
    // //setTimeout(bind(user.sayHi, user), 1000);
    // setTimeout(user.sayHi.bind(user), 1000);

    ///////////////////////////////////////////////////
    // //65  Функция - Декоратор

    // let array = [];
    //
    // function unknown(prop) {
    //     console.log(`Число вернулось с wrapper ${prop}`);
    //     return "hello";
    // };
    //
    // function wrapper(someFunc, array) {
    //
    //     return (a) => {
    //         array.push(a);
    //         return someFunc.call(this, a);
    //     }
    // };
    //
    // unknown = wrapper(unknown, array);
    //
    // unknown(1);
    // unknown(2);
    // unknown(3);
    //
    // let somethingReturn = unknown(4);
    //
    // console.log(array);
    // console.log(somethingReturn);

    ///////////////////////////////////////////////////
    // //66 try catch

    // try {
    //     setTimeout(function() {
    //         throw new Error(); // вылетит в консоль
    //     }, 1000);
    // } catch (e) {
    //     alert( "не сработает" );
    // }

    //---------------------------------------------------------------------------

    // let data = '{"name": 8}';
    //
    // try {
    //     let user = JSON.parse(data);
    //     throw new Error("Thiss is massage erroRRRRRRRRRRRRR");
    //
    //     alert( user.name );
    //
    // } catch (e) {
    //     console.log( "Извините, в данных ошибка, мы попробуем получить их ещё раз" );
    //     console.log( e.name );
    //     console.log( e.message );
    // }

    // let data = '{ "name": "Вася", "age": 30 }'; // данные корректны
    //
    // try {
    //
    //     let user = JSON.parse(data);
    //
    //     if (!user.name) {
    //         throw new SyntaxError("Ошибка в данных");
    //     }
    //
    //     //blabla(); // произошла непредусмотренная ошибка
    //
    //     console.log( user.name );
    //
    // } catch (e) {
    //
    //     if (e.name != "SyntaxError") {
    //         console.log( e.message );
    //     } else {
    //         throw e;
    //
    //     }
    //
    // }


    ///////////////////////////////////////////////////
    // //67  pop() - push() - shift() - unshift() - slice() - splice() - sort() -Object.keys()

    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //
    // console.log(array.shift()); //1
    // console.log(array.unshift('a', "b", "c")); //11 - новая длина массива
    // console.log(array.pop());//9
    // console.log(array.reverse());
    // console.log(array.slice(0,5));
    //
    //
    // let array1 = [1, 2, 3, 4, 5];
    // array1.splice(1,2);
    // console.log(array1);
    //
    // let array2 = [1, 2, 3, 4, 5];
    // array2.splice(5,0, 2,3,4);
    // console.log(array2);
    //
    // let array3 = [1, 2, 3, 4, 5];
    // array3.splice(3,0, 'a','b','c');
    // console.log(array3);
    //
    // let array4 = [1, 2, 3, 4, 5];
    // array4.splice(1,0, 'a','b');
    // array4.splice(6,0, 'c');
    // array4.splice(8,0, 'e');
    // console.log(array4);

    //-----------------------------------------------------------------------------

    // function sortArr(a,b){
    //     if(a > b)
    //         return 1;
    //     if(a < b)
    //         return -1;
    //     if(a==b)
    //         return 0 ;
    // }
    //
    // let array5 = [3, 4, 1, 2, 7];
    // console.log(array5.sort(sortArr));
    //
    //
    // var obj = {a: 1, b: 2, c: 3};
    // console.log(Object.keys(obj));
    //
    // //-----------------------------------------------------------------------------
    //
    // let obj1 = {
    //     'name': 'Bob',
    //     "lastName": 'Michelin',
    //     "age": 3
    // };
    // console.log(Object.keys(obj1));

    //-----------------------------------------------------------------------------

    // let str1 = 'hello';
    // str1 = str1[0].toUpperCase() + str1.substr(1);
    // console.log(str1);
    //
    // let str2 = '123456';
    // result = str2.split('').reverse().join('');
    // console.log(result);
    //
    // let str3 = 'http://phphtml';
    // if (str3.substr(0, 7) == 'http://') {
    //     console.log('Да');
    // } else {
    //     console.log('Нет');
    // }
    //
    // let str4 = 'index.html';
    // if (str4.substr(-5) == '.html') {
    //     console.log('Да');
    // } else {
    //     console.log('Нет');
    // }

    // ///////////////////////////////////////////////
    // 68-71

    // 1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
    //
    // 2.Сделайте функцию, которая возвращает сумму двух чисел.
    //
    // 3.Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
    //
    // 4.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

    //1
    // function squareOfNumber(num) {
    //     return num * num;
    // };
    // console.log(squareOfNumber(5));
    //
    // //2
    // function sum(num1, num2) {
    //     return num1 + num2;
    // };
    // console.log(sum(5, 5));
    //
    // //3
    // function sum1(num1, num2, num3) {
    //     return (num1 - num2) / num3;
    // };
    // console.log(sum1(12, 2, 2.5));
    //
    // //4
    // function returnDayOfWeek(datOfWeekUtc) {
    //     const daysOfWeek= ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    //
    //     switch (datOfWeekUtc) {
    //         case 1:
    //             return daysOfWeek[0];
    //             break;
    //         case 2:
    //             return daysOfWeek[1];
    //             break;
    //         case 3:
    //             return daysOfWeek[2];
    //             break;
    //         case 4:
    //             return daysOfWeek[3];
    //             break;
    //         case 5:
    //             return daysOfWeek[4];
    //             break;
    //         case 6:
    //             return daysOfWeek[5];
    //             break;
    //         case 7:
    //             return daysOfWeek[6];
    //             break;
    //     }
    // };
    // console.log(returnDayOfWeek(5));

    // ///////////////////////////////////////////////
    // 72-74

    // 1.Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да',
    //     а если нет - выведите 'нет'.
    //
    // 2.Дано число, например 31. Проверьте, что это число не делится ни на одно другое число
    // кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не
    // делится на все числа от 2 до 30. Если число не делится - выведите 'false',
    //     а если делится - выведите 'true'.
    //
    // 3.Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
    //     Если есть - выведите 'да', а если нет - выведите 'нет'.

    ////1
    // let array = [1,2,3,4,5,6,7,8];
    //
    // function checkNumber(array) {
    //     if (array.join('').indexOf("5") === -1) {
    //         console.log("No");
    //     } else {
    //         console.log("YES");
    //     }
    // };
    // checkNumber(array);
    
    // //2
    // let start = 2;
    // let end = 30;
    //
    // function checkDivision(num) {
    //     for(start; start <= end; start++ ) {
    //         if(num % start === 0) {
    //             console.log('YES');
    //         }else {
    //             console.log('NO');
    //         }
    //     }
    // };
    // checkDivision(31);

    // //3
    // let array = [1,1,2,3,3,4,5,6,7,7,8];
    //
    // function checkTheSameNum(array) {
    //      return array.sort( (a, b) => {
    //         if(a === b)
    //             console.log('YES');
    //     });
    // };
    // console.log(checkTheSameNum(array));

    // ///////////////////////////////////////////////
    // 75-77

    // 1.Сделайте функцию, которая параметрами принимает 2 числа.
    //     Если эти числа равны - пусть функция вернет true, а если не равны - false.
    //
    // 2.Сделайте функцию, которая параметрами принимает 2 числа.
    //     Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
    //
    // 3.Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
    //     Если отрицательное - пусть функция вернет true, а если нет - false.

    // //1
    // function checkTwoNum(a, b) {
    //     if(a === b) return true;
    //     return false;
    // };
    //
    // console.log(checkTwoNum(5, 5));

    // //2
    // function checkTwoNum(a, b) {
    //     if(a + b > 10) return true;
    //     return false;
    // };
    //
    // console.log(checkTwoNum(5, 10));

    // //3
    // function checkTwoNum(a) {
    //     if(a < 0) return true;
    //     return false;
    // };
    //
    // console.log(checkTwoNum(-1));

    // ///////////////////////////////////////////////
    // 78-81

    // 1.Заполните массив следующим образом: в первый элемент запишите 'x',
    //     во второй 'xx', в третий 'xxx' и так далее.
    //
    // 2.Заполните массив следующим образом: в первый элемент запишите '1',
    //     во второй '22', в третий '333' и так далее.
    //
    // 3.Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
    //     чтобы в сумме получилось больше 10-ти.
    //
    // 4. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
    //     Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

    // //1
    // let array = [],
    //     str ='';
    // for(let i = 0; i < 10; i++) {
    //     str += 'x';
    //     array.push(str);
    //     console.log(array);
    // }

    // //2
    // str = '';
    // arr = [];
    // for(let i = 1; i < 10; i++) {
    //     for(let j = 1; j <= i; j++) {
    //         str += i
    //     }
    //     arr.push(str);
    //     str = '';
    // }
    // console.log(arr);

    //3
    // let array = [3,5,5,1,1,1,5,6,7,8];
    //
    // function checkSUM(array) {
    //     let sum = 0;
    //     let quantity = 0;
    //
    //   for(let a = 0; a < array.length; a++) {
    //       sum += array[a];
    //       quantity++;
    //       if(sum > 10) {
    //           console.log(quantity);
    //           break;
    //       }
    //   }
    //   console.log(
    //       `Нужно сложить ${quantity} первых элемонта(ов) массива,
    //       чтобы получить число больше 10 -
    //        это число равняется ${sum}`
    //   );
    // };
    // checkSUM(array);

    //4
    // let array = [[1, 2, 3], [4, 5], [6]];
    // let sum = 0;
    //
    // for (var i = 0; i < array.length; i++) {
    //     for (var j = 0; j < array[i].length; j++) {
    //         sum += array[i][j];
    //     }
    // }
    // console.log(sum);

    // ///////////////////////////////////////////////
    // 82-

    // 1.Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа.
    //     Создайте для этого вспомогательную функцию isPositive(),
    //     которая параметром будет принимать число и возвращать true,
    //     если число положительное, и false - если отрицательное.
    //
    // 2.Дан массив с числами. Запишите в новый массив только те числа,
    //     которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию
    //     isNumberInRange из предыдущей задачи.
    //
    // 3.Сделайте функцию getDigitsSum (digit - это цифра),
    //     которая параметром принимает целое число и возвращает сумму его цифр.
    //
    // 4.Найдите все года от 1 до 2019, сумма цифр которых равна 13.
    //     Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
    //
    // 5.Сделайте функцию isEven() (even - это четный),
    //     которая параметром принимает целое число и проверяет: четное оно или нет.
    //     Если четное - пусть функция возвращает true, если нечетное - false.
    //
    // 6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
    //     Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
    //
    // 7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив
    //      его делителей (чисел, на которое делится данное число).

    // //1
    // let array = [1, 2, 3, -1, -2, -3];
    //
    // function isPositive(num) {
    //     if (num >=0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    //
    // let newArray = [];
    // for (var i = 0; i <= array.length; i++) {
    //     if (isPositive(array[i])) {
    //         newArray.push(array[i]);
    //     }
    // }
    //
    // console.log(newArray);

    // //2
    // let array = [8,2,3,2,5,6,7,8,9,10,11,12,7,14,5];
    // let newArray =[];
    //
    // function isNumberInRange(num) {
    //     if(num > 0 &&  num < 10) {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // };
    //
    // array.forEach((e) => {
    //     if(isNumberInRange(e)) {
    //         newArray.push(e);
    //     }
    // });
    // console.log(newArray);

    // //3
    // function getDigitsSum(num) {
    //     let arrayNum = String(num).split("");
    //     let sum = 0;
    //
    //     for (let a = 0; a < arrayNum.length; a++) {
    //         sum += +arrayNum[a];
    //     }
    //     return sum;
    // };
    // console.log(getDigitsSum(2019));
    //
    // //4
    // let currentYear = 2019;
    // let setNum = 13;
    //
    // for(let a = 1; a < currentYear; a++) {
    //     if(getDigitsSum(a) === setNum) {
    //         console.log(a);
    //     }
    // }

    //5
    // function isEven(num) {
    //     if(num % 2 === 0) {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // };
    // console.log(isEven(6));
    //
    // //6
    // let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    // let newArray = [];
    //
    // for (let a = 0; a < array.length; a++) {
    //     if(isEven(array[a])) {
    //         newArray.push(array[a]);
    //     }
    // };
    // console.log(newArray);

    //7
    function getDivisors(num) {
        let array = [];
        for(let a = 0; a <= num; a++) {
            if(num % a === 0) {
                array.push(a);
            }
        }
        return array;
    };
    console.log(getDivisors(100));





















































})();