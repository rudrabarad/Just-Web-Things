console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")
// Kita juga bisa mengaksesnya seperti ini
alert("Hello Browser!")
// alert("Terimakasih.");
// // mengakses method alert() pada window
// window.alert("Hello Browser!")
 

// var firstName = "Arif Chaya Prananda";
// console.log(firstName);
 
// firstName = "Rif";
// console.log(firstName);
// x = 100;
// var x;
// console.log(x);
//  var x;
// x = 100;
// console.log(x);
////
//
//
// let x = 10;
// console.log(typeof(x))
 
// /* output: number */
 
// let y = 17.25;
// console.log(typeof(y))
 
// /* output: number */
// let a = 12;
// let b = 9;
 
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// /* Increment dan Decrement */
 
// let postfix = 5;
// console.log(postfix++);
// /* output: 5 */
 
// let prefix = 5;
// console.log(++prefix);
// /* output: 6 */
// // let greet = "Hello";
// // console.log(typeof(greet))

// let greet = "Hello";
// let moreGreet = greet + greet;
// console.log(moreGreet);
//
//
// let x = true;
// let y = false;
 
// console.log(typeof(x))
// console.log(typeof(y))
 
// /* output: 
// boolean
// boolean
// */
// const a = 10;
// const b = 12;
 
// let isGreater = a > b;
// let isLess = a < b;
 
// console.log(a)
// console.log(b)
 
// /* output:
// false
// true
// */
// let someLaterData = null;
// console.log(someLaterData);
 
// /* output:
// null
// */
//
// let x; // x merupakan undefined
// x = 1 // sekarang x merupakan number
// x = true // sekarang x merupakan boolean
// x = "Arif Cahya Prananda" // sekarang x merupakan string
// let myArray = ["Coklat", 42.5, 22, true, "Programming"];
// console.log(myArray);

//
// let myArray = ["Coklat", 42.5, 22, true, "Programming"];
// console.log(myArray[1]);
// let myArray = ["Coklat", 42.5, 22, true, "Programming"];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);
// console.log("Panjang nilai myArray adalah " + myArray.length + ".");
 
//  let object = {key1: "value1", key2: "value2", key3: "value3"}


// let user = {
//     firstName: "Arif",
//     lastName: "Cahya",
//     age: 20, 
//     isMuggle: false,
//     stuff: ["Magic Wind", "Flying Car", "Owl"]
// }; 

// console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
// console.log("Umur saya " + user.age + " tahun");
// function greeting() {
//     console.log("Good Morning!")
// }
 
// greeting();
 
// function greeting(name, language) {
//     if(language === "English") {
//         console.log("Good Morning " + name + "!");
//     } else if (language === "French") {
//         console.log("Bonjour " + name + "!");
//     } else {
//         console.log("Selamat Pagi " + name + "!");
//     }
// }
 
// greeting("Harry", "French");
// function multiply(a, b) {
//     return a * b;
// }
 
// let result = multiply(10, 2)
// console.log(result)
 
// /* output
// 20
// */
// global variable, dapat diakses pada parent() dan child()
// const a = 'a'; 
 
// function parent() {
//     // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
//     const b = 'b'; 
    
//     function child() {
//         // local varible, dapat diakses hanya pada fungsi child().
//         const c = 'c';
//     }
// }
// function multiply(num) {
//     total = num * num;
//     return total;
// }
 
// let total = 9;
// let number  = multiply(20);
 
// console.log(total)
/* 
const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}*/

// const calculator = {
//    displayNumber: '0',
//    operator: null,
//    firstNumber: null,
//    waitingForSecondNumber: false
// };
// function updateDisplay() {
//    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
// }
 
// function clearCalculator() {
//    calculator.displayNumber = '0';
//    calculator.operator = null;
//    calculator.firstNumber = null;
//    calculator.waitingForSecondNumber = false;
// }
// function inputDigit(digit) {
//    calculator.displayNumber += digit;
// }
// const buttons = document.querySelectorAll(".button");
// for (let button of buttons) {
//    button.addEventListener('click', function(event) {
 
//        // mendapatkan objek elemen yang diklik
//        const target = event.target;
 
//        inputDigit(target.innerText);
//        updateDisplay()
//    });
// }
// function inputDigit(digit) {
//    if(calculator.displayNumber === '0') {
//        calculator.displayNumber = digit;
//    } else {
//        calculator.displayNumber += digit;
//    }
// }
// button.addEventListener('click', function(event) {
 
//        // mendapatkan objek elemen yang diklik
//        const target = event.target;
 
//        if (target.classList.contains('clear')) {
//            clearCalculator();
//            updateDisplay();
//            return;
//        }
 
//        if(target.classList.contains('negative')) {
//            inverseNumber();
//            updateDisplay();
//            return;
//        }
 
//        if(target.classList.contains('equals')) {
//            performCalculation();
//            updateDisplay();
//            return;
//        }
 
//        if(target.classList.contains('operator')) {
//            handleOperator(target.innerText)
//            updateDisplay();
//            return;
//        }
 
//        inputDigit(target.innerText);
//        updateDisplay()
//    });
//    function handleOperator(operator) {
//    if (!calculator.waitingForSecondNumber) {
//        calculator.operator = operator;
//        calculator.waitingForSecondNumber = true;
//        calculator.firstNumber = calculator.displayNumber;
//    } else {
//        alert('Operator sudah ditetapkan')
//    }
// }
// function inputDigit(digit) {
//    if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
//            calculator.displayNumber = digit;
//    } else {
//        if (calculator.displayNumber === '0') {
//            calculator.displayNumber = digit;
//        } else {
//            calculator.displayNumber += digit;
//        }
//    }
// }
// function performCalculation() {
//    if (calculator.firstNumber == null || calculator.operator == null) {
//        alert("Anda belum menetapkan operator");
//        return;
//    }
 
//    let result = 0;
//    if (calculator.operator === "+") {
//        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
//    } else {
//        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
//    }
 
//    calculator.displayNumber = result;
// }

// const calculator = {
//    displayNumber: '0',
//    operator: null,
//    firstNumber: null,
//    waitingForSecondNumber: false
// };
 
// function updateDisplay() {
//    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
// }
 
// function clearCalculator() {
//    calculator.displayNumber = '0';
//    calculator.operator = null;
//    calculator.firstNumber = null;
//    calculator.waitingForSecondNumber = false;
// }
 
// function inputDigit(digit) {
//    if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
//        calculator.displayNumber = digit;
//    } else {
//        if (calculator.displayNumber === '0') {
//            calculator.displayNumber = digit;
//        } else {
//            calculator.displayNumber += digit;
//        }
//    }
// }
 
// function inverseNumber() {
//    if (calculator.displayNumber === '0') {
//        return;
//    }
//    calculator.displayNumber = calculator.displayNumber * -1;
// }
 
// function handleOperator(operator) {
//    if (!calculator.waitingForSecondNumber) {
//        calculator.operator = operator;
//        calculator.waitingForSecondNumber = true;
//        calculator.firstNumber = calculator.displayNumber;
//    } else {
//        alert('Operator sudah ditetapkan')
//    }
// }
 
// function performCalculation() {
//    if (calculator.firstNumber == null || calculator.operator == null) {
//        alert("Anda belum menetapkan operator");
//        return;
//    }
 
//    let result = 0;
//    if (calculator.operator === "+") {
//        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
//    } else {
//        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
//    }
 
//    calculator.displayNumber = result;
// }
 
 
// const buttons = document.querySelectorAll(".button");
// for (let button of buttons) {
//    button.addEventListener('click', function(event) {
 
//        // mendapatkan objek elemen yang diklik
//        const target = event.target;
 
//        if (target.classList.contains('clear')) {
//            clearCalculator();
//            updateDisplay();
//            return;
//        }
 
//        if (target.classList.contains('negative')) {
//            inverseNumber();
//            updateDisplay();
//            return;
//        }
 
//        if (target.classList.contains('equals')) {
//            performCalculation();
//            updateDisplay();
//            return;
//        }
 
//        if (target.classList.contains('operator')) {
//            handleOperator(target.innerText)
//            updateDisplay();
//            return;
//        }
 
//        inputDigit(target.innerText);
//        updateDisplay()
//    });
// }
// const calculator = {
//    displayNumber: '0',
//    operator: null,
//    firstNumber: null,
//    waitingForSecondNumber: false
// };
 
// function updateDisplay() {
//    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
// }
 
// function clearCalculator() {
//    calculator.displayNumber = '0';
//    calculator.operator = null;
//    calculator.firstNumber = null;
//    calculator.waitingForSecondNumber = false;
// }
 
// function inputDigit(digit) {
//    if (calculator.displayNumber === '0') {
//        calculator.displayNumber = digit;
//    } else {
//        calculator.displayNumber += digit;
//    }
// }
 
 
// const buttons = document.querySelectorAll(".button");
// for (let button of buttons) {
//    button.addEventListener('click', function(event) {
 
//        // mendapatkan objek elemen yang diklik
//        const target = event.target;
 
//        if (target.classList.contains('clear')) {
//            clearCalculator();
//            updateDisplay();
//            return;
//        }
 
//        inputDigit(target.innerText);
//        updateDisplay()
//    });
// }



const calculator = {
   displayNumber: '0',
   operator: null,
   firstNumber: null,
   waitingForSecondNumber: false
};
 
function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
 
function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.waitingForSecondNumber = false;
}
 
function inputDigit(digit) {
   if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
       calculator.displayNumber = digit;
   } else {
       if (calculator.displayNumber === '0') {
           calculator.displayNumber = digit;
       } else {
           calculator.displayNumber += digit;
       }
   }
}
 
function inverseNumber() {
   if (calculator.displayNumber === '0') {
       return;
   }
   calculator.displayNumber = calculator.displayNumber * -1;
}
 
function handleOperator(operator) {
   if (!calculator.waitingForSecondNumber) {
       calculator.operator = operator;
       calculator.waitingForSecondNumber = true;
       calculator.firstNumber = calculator.displayNumber;
   } else {
       alert('Operator sudah ditetapkan')
   }
}
 
function performCalculation() {
   if (calculator.firstNumber == null || calculator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;
   }
 
   let result = 0;
   if (calculator.operator === "+") {
       result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
   } else {
       result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
   }
 
   calculator.displayNumber = result;
}
 
 
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('negative')) {
           inverseNumber();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('equals')) {
           performCalculation();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('operator')) {
           handleOperator(target.innerText)
           updateDisplay();
           return;
       }
 
       inputDigit(target.innerText);
       updateDisplay()
   });
}
function performCalculation() {
   if (calculator.firstNumber == null || calculator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;
   }
 
   let result = 0;
   if (calculator.operator === "+") {
       result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
   } else {
       result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
   }
 
   // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
   const history = {
       firstNumber: calculator.firstNumber,
       secondNumber: calculator.displayNumber,
       operator: calculator.operator,
       result: result
   }
   putHistory(history);
   calculator.displayNumber = result;
   renderHistory();
}