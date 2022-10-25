let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let passwordLength = document.getElementById("passwordLength")
let numbers = false
let symbols = false
let light = false
let lightBtn = document.getElementById("btnLightMode")
let numberCheck = document.getElementById("numberCheckBox")
let symbolCheck = document.getElementById("symbolCheckBox")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbersArray = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

const symbolsArray = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

password1.addEventListener("click", function() {
    copyPassword("password1")
})

password2.addEventListener("click", function() {
    copyPassword("password2")
})

function toggleNumbers() {
    numbers = numberCheck.checked
}

function toggleSymbols() {
    symbols = symbolCheck.checked
}

function generatePassword() {
    password1.textContent = ""
    password2.textContent = ""
    
    let array = []

    if (numbers && !symbols) {
        array = characters.concat(numbersArray)
    } else if (!numbers && symbols) {
        array = characters.concat(symbolsArray)
    } else if (numbers && symbols) {
        array = characters.concat(numbersArray).concat(symbolsArray)
    } else {
        array = characters
    }

    for (let i = 0; i < passwordLength.value; i++) {
        let randomIndex01 = Math.floor(Math.random() * array.length)
        let randomIndex02 = Math.floor(Math.random() * array.length)

        password1.textContent += array[randomIndex01]
        password2.textContent += array[randomIndex02]
    }

}

function copyPassword(string) {
    let copyText = document.getElementById(string)
    let textArea = document.createElement("textarea")
    textArea.value = copyText.textContent
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("Copy")
    textArea.remove();
}

function lightMode() {
    if (light) {
        lightBtn.textContent = "Light Mode"
        light = false
    } else {
        lightBtn.textContent = "Dark Mode"
        light = true
    }
    const element = document.body
    element.classList.toggle("light-mode")
}


