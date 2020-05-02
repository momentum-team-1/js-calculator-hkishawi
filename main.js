//REFERENCE
// let existingElement = document.querySelector(".empty-div");
// // First select where you want to place the new content
// let newElement = document.createElement("div");
// // Create the new element
// let text = document.createTextNode("Hello there!");
// // Create some text
// newElement.appendChild(text);
// // Add text to new element
// existingElement.appendChild(newElement);
// // Add that element to the DOM

//when you hit 7. 7 will appear in input


//TRIAL 1
// const numeral = "seven"

// // window.addEventListener ('load', function () {
// //     const parentEl = document.querySelector(``)
// // }

// let seven = document.querySelector("input") 
//     let seven = document.createElement("seven")
//     let text = document.createTextNode("7");
// newElement.appendChild("7")

// let seven = document.querySelector("clear")
//     let seven = document.querySelectorAll("seven")[7];
//     elementtoRemove.remove();

// TRIAL 2 #7
// //I want to grab #7
// $(".numbutt").click(function(event) {
//     var thingClicked = document.querySelector("seven")
//     console.log("you clicked: " + event, thingClicked)
//     $("output").html(thingClicked)

// })
// //^ comes out undefined...

//TRIAL 3 #7
//now that 7s grabbed, need to move it to "output" which prbly means function(event)
//function move(seven)
// function input(numeral) {
    // let numeral = document.getElementById("#seven");
    // //grabbing the number from the DOM
    // let newElement = document.createElement("#output");
    // let text = document.createTextNode("7");
    // newElement.appendChild(text);
    // existingElement.appendChild(newElement);
// }
// let elementtoRemove = document.querySelectorAll("clear")[7] //<what is [] representing? is clear in the correct place??
//^ this code w syntax errors; 

// //TRIAL 4 #7
// const keys = document.querySelector('.numbutt');
// keys.addEventListener('click', (event) => {
//     const {target} = event; 
//     if (!target.matches('numbutt')) {
//         return;
//     }
//     if (target.classList.contains('seven')) {
//         console.log('seven', target.value);
//         return;
//     }
let currentInput = ""
    

const sevenElement = document.getElementById("seven")
sevenElement.addEventListener('click', function (event) {
    console.log("number 7")
let output = document.querySelector('#output')
    currentInput = currentInput + "7"
    output.textContent = currentInput
})

const plusElement = document.getElementById("plus")
plusElement.addEventListener('click', function (event) {
    console.log("x + y")
let output = document.querySelector("#output") 
    currentInput = currentInput + "+"
    output.textContent = currentInput 
})

const equalElement = document.getElementById ("equal")
equalElement.addEventListener('click', function (event) {
    console.log("evaluate")
    let output = document.querySelector("#output")
        currentInput=String(eval(currentInput))
        output.textContent = currentInput
})   

const clearElement = document.getElementById("clear")
clearElement.addEventListener('click', function (event) {
    console.log("clear all")
    let output = document.querySelector ("#output")
        currentInput = ""
        output.textContent = currentInput
})

//goal: take input and evaluate it with function, display results of eval function

    
 

    // let parentEl = document.querySelector('#seven')
    // letSevenEl = document.createElement('div')
    // console.log("inputting 7")
    // let text = document.createTextNode("7")
    