let totalReal = 0;
let TotalString = "0";
let operatorAnterior;

const screen = document.querySelector('.screen');

function clickBoton(valor) {
    if(isNaN(valor)) {
        manejoSimbolo(valor);
    } else {
        manejoNumero(valor);
    }
    screen.innerText = TotalString;
}

function manejoSimbolo(symbol) {
    switch(symbol) {
        case 'C':
            TotalString = '0';
            totalReal = 0;
            break;
        case '=':
            if (operatorAnterior === null) {
                return
            }
            pasarOperacion(parseInt(TotalString));
            operatorAnterior = null;
            TotalString = totalReal;
            totalReal = 0;
            break;
        case '←':
            if (TotalString.length === 1) {
                TotalString = '0';
            } else {
                TotalString = TotalString.toString(0, TotalString.length - 1)
            }
            break;
        case '+':
        case '−':
        case 'x2':
        case '√':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (TotalString === '0') {
        return;
    }

    const intTotalString = parseInt(TotalString);

    if (totalReal === 0) {
        totalReal = intTotalString;
    } else {
        pasarOperacion(intTotalString)
    }
    operatorAnterior = symbol;
    TotalString = '0';
}

function pasarOperacion(intTotalString) {
    if (operatorAnterior === '+') {
        totalReal += intTotalString;
    } else if (operatorAnterior === '−') {
        totalReal -= intTotalString;
    } else if (operatorAnterior === '×') {
        totalReal *= intTotalString;
    } else if (operatorAnterior === '÷') {
        totalReal /= intTotalString;
    }
}

function manejoNumero(numberString) {
    if (TotalString === '0') {
        TotalString = numberString;
    } else {
        TotalString += numberString;
    }
}

function iniciar() {
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        clickBoton(event.target.innerText);
    })
}

iniciar();