let button = document.querySelector('button');
let h1 = document.body.querySelector('h1');

function randomBG() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
};


// i think i need to take the result from randomBG(), which will be rgb(#, #, #) as a string, and slice it into 3 numbers and reassign them to r, g, and b in order for the getContrastYIQ() to work.

function getContrastYIQ() {
    let yiq = ((r*299) + (g*587) + (b*114)) / 1000;
    return (yiq >= 500) ? 'black' : 'white';
};

button.addEventListener('click', function() {
    let bgColor = randomBG();
    document.body.style.backgroundColor = bgColor;
    let textColor = getContrastYIQ(bgColor);
    document.body.style.color = textColor;
    h1.textContent = `this color is ${bgColor}`;
});

