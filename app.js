let button = document.querySelector('button');
let h1 = document.body.querySelector('h1');

button.addEventListener('click', function(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let bgColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = bgColor;
    h1.textContent = `this color is ${bgColor}`
});