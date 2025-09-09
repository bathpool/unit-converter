/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById("input-box")
const btn = document.getElementById("button")
const outputLength = document.getElementById("length")
const outputVolume = document.getElementById("volume")
const outputMass = document.getElementById("mass")


btn.addEventListener("click", function() {
    let input = inputBox.value
    if ( isNaN(Number(input)) ) {
    } else {
        let output1 = input * 3.281
        let output2 = input / 3.281
        outputLength.innerHTML = `${input} meters = ${output1.toFixed(3)} feet | ${input} feet = ${output2.toFixed(3)} meter`

        output1 = input * 0.264
        output2 = input / 0.264
        outputVolume.innerHTML = `${input} liter = ${output1.toFixed(3)} gallon | ${input} gallon = ${output2.toFixed(3)} liter`

        output1 = input * 2.204
        output2 = input / 2.204
        outputMass.innerHTML = `${input} kilogram = ${output1.toFixed(3)} pound | ${input} pound = ${output2.toFixed(3)} kilogram`
    }
})
