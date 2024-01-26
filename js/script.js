const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContent = document.querySelectorAll('.tabsContentItem ');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click',function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContent[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContent[i].classList.add('active')
    })
}

// soat

const s = document.querySelector('.s');
const m = document.querySelector('.m');
const h = document.querySelector('.h');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');

function soat() {
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30

    s.style = `transform:rotate(${sec}deg);`
    m.style = `transform:rotate(${min}deg);`
    h.style = `transform:rotate(${hour}deg);`

    hours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    setTimeout(()=>{
        soat()
    },1000)

}
soat()

// sekundomer


let stopwatchSecond = document.querySelector('.stopwatch__seconds')
let stopwatchMinute = document.querySelector('.stopwatch__minutes')
let stopwatchHour = document.querySelector('.stopwatch__hours')
let stopwatchBtn = document.querySelector('.stopwatch__btn')
let stopwatchLight = document.querySelector('.tabsLink__span')


stopwatchBtn.addEventListener('click' , function () {
    if (this.innerHTML.toLowerCase() == 'start') {
        this.innerHTML = 'STOP'
        stopwatchLight.classList.add('active')
        interval = setInterval(() => {
            stopwatch()
        }, 1000);
    }else if (this.innerHTML.toLowerCase() == 'stop') {
        this.innerHTML = 'CLEAR' 
        stopwatchLight.classList.remove('active')
        stopwatchLight.classList.add('active_clear')
        clearInterval(interval)
    }else if (this.innerHTML.toLowerCase() == 'clear') {
        this.innerHTML = 'START'
        stopwatchLight.classList.add('active_clear')
        stopwatchCount = 0
        stopwatchHour.innerHTML = 0
        stopwatchMinute.innerHTML = 0
        stopwatchSecond.innerHTML = 0
    }
})

let stopwatchCount = 0

function stopwatch() {
    stopwatchCount++
    if (stopwatchCount < 60) {
        stopwatchSecond.innerHTML = stopwatchCount
    }if (stopwatchCount > 59) {
        stopwatchMinute.innerHTML ++
        stopwatchCount = 0
        stopwatchSecond.innerHTML = stopwatchCount
    }if (stopwatchMinute.innerHTML > 59) {
        stopwatchHour.innerHTML++
        stopwatchMinute.innerHTML = 0
    }
}


// calculator
class Calculator {
    constructor(calcScreenOut){
        this.calcScreenOut = this.calcScreenOut
    }
    delete(){
        this.calcScreenOut = this.calcScreenOut.toString().slice(0, -1)
    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const calcScreenOut = document.querySelector('[data-calc-screen]')


document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('.calc__screen-out');
    const buttons = document.querySelectorAll('.calc__btn');

    let currentInput = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.innerText;

            if (buttonText === 'ac') {
                currentInput = '';
                result = '';
            } else if (buttonText === 'ce') {
                currentInput = currentInput.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    result = eval(currentInput);
                } catch (error) {
                    result = 'Error';
                }
            } else {
                currentInput += buttonText;
            }

            screen.innerText = result !== '' ? result : currentInput;
        });
    });
});


    

