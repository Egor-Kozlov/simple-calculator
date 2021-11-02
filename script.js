'use strict'

let isFirstResult = true
const defaultValue = '0'
let oldResult = ''

const oldResultValue = document.querySelector('.old-result__value')
const previousExpressionValue = document.querySelector('.previous-expression__value')
const mainRowValue = document.querySelector('.main-row__value')

const display = (value) => {
    if (mainRowValue.textContent.length >= 9) {
        return
    }
    if (mainRowValue.textContent === '0') {
        mainRowValue.textContent = ''
        mainRowValue.textContent = mainRowValue.textContent += value
    } else {
        mainRowValue.textContent = mainRowValue.textContent += value
    }
}

const evaluateValue = () => {
    let result
    if (mainRowValue.textContent.includes("%")) {
        let arr = mainRowValue.textContent.split('%')
        if (!arr[1]) {
            result = arr[0] / 100
        }
    } else {
        result = eval(mainRowValue.textContent)
    }
    previousExpressionValue.textContent = mainRowValue.textContent
    mainRowValue.textContent = result
    oldResultValue.textContent = oldResult
    oldResult = result
}

const clearField = () => {
    mainRowValue.textContent = defaultValue
}
