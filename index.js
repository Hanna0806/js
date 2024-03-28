// let userOld = prompt('введите ваш возраст')


// if (userOld >= 18) {
//     confirm('ваш возраст подтв')
// } else {
//     confirm('ваш возраст не подтв');
// }

// userOld >= 18 && userOld < 40 ? confirm('ваш возраст подтв') : 
// userOld >= 40 ? confirm('ваш возраст 40') : confirm('вы введи ${userOld}') 



// let userOld = prompt('введите ваш возраст')
// userOld <= 18 ? confirm('ваш возраст подтв')  :
// userOld >= 30 && userOld <=39 ? confirm('ваш возраст 30 - 39')  :
// userOld >= 40 ? confirm('ваш возраст ,больше 40')  :
// confirm(`ВЫ ввели ${userOld}`)

// let userOld = prompt('введите ваш возраст')
// if (userOld <= 18) {
//     confirm('ваш возраст подтв')
// } else if (userOld >= 30 && userOld <=39) {
//     confirm('ваш возраст 30 - 39') 
// }else if (userOld >= 40) {
//     confirm('ваш возраст ,больше 40') 
// } confirm(`ВЫ ввели ${userOld}`)


// let userOld = prompt('your mane')

// userOld ||= 'привет'


// function summ(a,b) {
//     console.log(a + b);
// }
// summ(5,5)


// let isShowPassword = true

// let amail = "25252"



// const correctEmail = 'user@mail.ru'
// const inCorrectEmail = email
// let errorMessage = null;

// const validateEmail1 = function () {
//     console.log('первая ф-ия');
// }

// const validateEmail2 = function foo() {
//     console.log('вторая ф-ия');
// }

// const validateEmail3 = () => {
//     console.log('стрелочная ф-ия');
// }

// const validateEmail4()  {
//     console.log('четвертая ф-ия');
// }


// const validateEmail = (userEmail) {
//     let error = correctEmail === userEmail ? null : 'обяз-но напишите корр. emai'
//     switch (error) {
//         case :
//     }
// }


// let d = 'global';
// const foo1 = (firstname, secondName, age) => {

//     const foo2 = (secondName) => {

//         const foo3 = function (age) {
//             let c = ('foo3')
//             console.log(firstname, secondName, age)
//         }
//         foo3(age)
//     }
//     foo2(secondName)
// }
// foo1('Dzmitry', 'Ruban', 36);

// function a() {

// }

// let b = function() {

// } 

// let c = () => {

// }

// function number1(a) {

// }
// function number2(b) {

// }
// function number3(c) {

// }
// const sum = function(a,b,c) {
// return (a*a) + (b*b) + (c*c)
// }
// console.log(sum(1,2,3));


// const pocket = {
//     sum1: 10,
//     sum2: 100,
//     sum3: 1000
// }
// function checkMoney(pocket) {
//     const userMoney = prompt('Введите значение')
//     if (pocket.sum1 > +userMoney) {
//         console.log("Ничего не купишь")
//     } else if (pocket.sum2 > +userMoney || pocket.sum2 < +userMoney) {
//         console.log("деньги есть - можно поесть")
//     } else if (pocket.sum3 > +userMoney || pocket.sum3 < +userMoney) {
//         console.log("Пятница")
//     } else {
//         console.log("ого ты богач")
//     }
// }
// checkMoney(pocket);

// const user1  = {
//     name: 'Vlad',
//     salary: 50,
//     depart: 'бухг'
// }

// const user2  = {
//     name: 'Oleg',
//     salary: 100,
//     depart: 'бухг'
// }

// const user3  = {
//     name: 'Dima',
//     salary: 50,
//     depart: 'бухг'
// }

// const minSalary = 50;
// const maxSalary = 100;

// const setSalary = (obj) => {
// if (!obj.salary) {
//     obj.salary = 50
// }
// console.log(obj);
// }
// setSalary(user1)
// user1.salary 50



// const price = {
//     car: 100,
//     home: 1000,
//     furnit: 20,
//     product:2
// }

// const apdatePrice = (obj) => {
// for (let key in obj) {
//     let extraPrice = obj[key] * 0.13 
//     obj[key] = obj[key] + extraPrice
//     }
//     console.log(obj);
// }
// apdatePrice(price)

let body = document.body

console.log(body);