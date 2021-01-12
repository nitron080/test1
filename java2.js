let name = document.querySelector('.name')
let fname = document.querySelector('.fname')
let button = document.querySelector ('button')
let hello = document.querySelector('.hello')

button.onclick = function () {
hello.innerHTML = 'Привет' + name.value + fname.value
}