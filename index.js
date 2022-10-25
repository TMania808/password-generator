let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let passwordLength = document.getElementById("passwordLength")
let numbers = false
let symbols = false
let light = false
let lightBtn = document.getElementById("btnLightMode")
let numberCheck = document.getElementById("numberCheckBox")
let symbolCheck = document.getElementById("symbolCheckBox")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

password1.addEventListener("click", function() {
    copyPassword("password1")
})

password2.addEventListener("click", function() {
    copyPassword("password2")
})

function toggleNumbers() {
    if (numberCheck.checked === true) {
        numbers = true
    } else {
        numbers = false
    }
}

function toggleSymbols() {
    if (symbolCheck.checked === true) {
        symbols = true
    } else {
        symbols = false
    }
}

function generatePassword() {
    password1.textContent = ""
    password2.textContent = ""
    
    if (numbers === true && symbols === true) {
        for (let i = 0; i < passwordLength.value; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            password1.textContent += characters[randomIndex]
        }
    
        for (let i = 0; i < passwordLength.value; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            password2.textContent += characters[randomIndex]
        }
    } else if (numbers === true && symbols === false) {
            for (let i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random() * 62)
                password1.textContent += characters[randomIndex]
            }
    
            for (let i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random() * 62)
                password2.textContent += characters[randomIndex]
            }
    } else if (numbers === false && symbols === false) {
            for (let i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random() * 51)
                password1.textContent += characters[randomIndex]
        }
    
            for (let i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random() * 51)
                password2.textContent += characters[randomIndex]
        }
    } else if (numbers === false && symbols === true) {
        for (let i = 0; i < passwordLength.value; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            if (characters[randomIndex] === "0") {
                i--
            } else if (characters[randomIndex] === "1") {
                i--
            } else if (characters[randomIndex] === "2") {
                i--
            } else if (characters[randomIndex] === "3") {
                i--
            } else if (characters[randomIndex] === "4") {
                i--
            } else if (characters[randomIndex] === "5") {
                i--
            } else if (characters[randomIndex] === "6") {
                i--
            } else if (characters[randomIndex] === "7") {
                i--
            } else if (characters[randomIndex] === "8") {
                i--
            } else if (characters[randomIndex] === "9") {
                i--
            } else {
                password1.textContent += characters[randomIndex]
            }       
        }
    
        for (let i = 0; i < passwordLength.value; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            if (characters[randomIndex] === "0") {
                i--
            } else if (characters[randomIndex] === "1") {
                i--
            } else if (characters[randomIndex] === "2") {
                i--
            } else if (characters[randomIndex] === "3") {
                i--
            } else if (characters[randomIndex] === "4") {
                i--
            } else if (characters[randomIndex] === "5") {
                i--
            } else if (characters[randomIndex] === "6") {
                i--
            } else if (characters[randomIndex] === "7") {
                i--
            } else if (characters[randomIndex] === "8") {
                i--
            } else if (characters[randomIndex] === "9") {
                i--
            } else {
                password2.textContent += characters[randomIndex]
            }       
        }
    }
}

function copyPassword(string) {
    let copyText = document.getElementById("password1")
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


