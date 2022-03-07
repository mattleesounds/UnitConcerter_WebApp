//save number to variable in code
let number = 4089
let numberToConvert = document.getElementById("number-to-convert")
numberToConvert.textContent = number

//save solution elements to variables
let lengthSol = document.getElementById("length-sol")
let volumeSol = document.getElementById("volume-sol")
let massSol = document.getElementById("mass-sol")

let length = 0
let volume = 0
let mass = 0


lengthSol.textContent = 4
volumeSol.textContent = 5
massSol.textContent = 6

//do calculations
function lengthCalc() {
    length = (number * 3.28084)
}

function volumeCalc() {
    volume = (number * 0.264172)
}
function massCalc() {
    mass = (number * 2.20462)
}

lengthCalc()
volumeCalc()
massCalc()

//display results
lengthSol.textContent = length.toFixed(3)
volumeSol.textContent = volume.toFixed(3)
massSol.textContent = mass.toFixed(3)