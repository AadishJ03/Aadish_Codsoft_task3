let screenEl = document.getElementById("screen-el")

function clearScreen() {
    screenEl.value = " "
}

function work(value) {
    screenEl.value += value
}

function calculate() { 
    let soln = eval(screenEl.value)
    screenEl.value = soln
}