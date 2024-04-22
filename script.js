const save = document.querySelector('#controvasia')
const pChange = document.querySelector('#p1')
// const baseUrl = 'http://localhost:3000/'
// console.log(button)

// function theClick() {
//     alert('You clicked me!')
//     pChange.style.fontSize = "30px";
//     pChange.style.color = "#B3B6B7"
// }
// function addStudentData() {
//     const data = {
//         name: 'Barack',
//         age: 18,
//         class: 'Infernals',
//         course: 'MoringaInstitute'
//     }
//     fetch(`http://localhost:3000/student`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'aplication/json',
//         },
//         body: 'JSON.stringify(data)'
//     })
//     .then(Response => Response.json())
//     .then((data) => console.log(data))
// }
// save.addEventListener('click', addStudentData)

// A calculator
function display (value) {
    var display= document.getElementById('display')
    .value += value;
}

function deleteButton (value){
    const valueOnDisplay = document.getElementById('display').value
    document.getElementById('display')
    .value = valueOnDisplay.slice(0, -1)
}

function calculate () {
    var display = document.getElementById('display')
   try {
     display.value = eval(display.value)
   }
   catch (error) {
    display.value = 'Error'
   }
}

function clearDisplay() {
    document.getElementById('display').value = '';
  }