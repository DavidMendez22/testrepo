let length
let width

function calculateArea() {
 length = parseFloat(document.querySelector('#length').value);
 width = parseFloat(document.querySelector('#width').value);

let area = length * width;
console.log(area)

 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}