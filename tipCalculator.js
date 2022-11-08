const amount = document.getElementById('amount')
const increment = document.getElementById('add')
const decrement = document.getElementById('sub')
const tip = document.getElementById('bill__amount')
const split = document.getElementById('billSplit')
const clear = document.querySelector('.clear')
const calculate = document.querySelector('.calculate')
const result = document.querySelector('.result')
const increasePeople = document.getElementById('addPeople')
const decreasePeople = document.getElementById('subPeople')

clear.addEventListener('click', function () {
    amount.value = ""
    tip.innerText = "18"
    split.innerText = '1'
    result.innerHTML = ""
})
//buttons for tip perventage
increment.addEventListener('click', function () {
    tip.innerText++
})
decrement.addEventListener('click', function () {
    tip.innerHTML--
})
//buttons for split bill
increasePeople.addEventListener('click', function () {
    split.innerHTML++
})

decreasePeople.addEventListener('click', function () {
    if(split.innerText === '1'){
        alert('People cannot be zero')
        split.innerText++
    }
    split.innerHTML--
})
//for calculating total
calculate.addEventListener('click', function () {
    let tipPercentage = tip.innerText / 100
    let totalTip  = amount.value * tipPercentage;
     let total = parseFloat(totalTip) + parseFloat(amount.value)
    result.innerHTML = total / split.innerText
   
})
