const field = document.querySelector('.field');

var pressed = false;

field.addEventListener('mousedown', (event) => {
    event.preventDefault(); 
    pressed = true;
});
field.addEventListener('mouseup', () => {
    pressed = false;
})
field.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'black';
})

function fillField(size){

    let square = size*size;

    let pixelSize = 500/size;
    for (let i = 0; i < square; i++){
        const pixel = document.createElement('div');
        pixel.setAttribute('style', `width: ${pixelSize}px; height: ${pixelSize}px`);

        field.append(pixel);
    }
    
}
fillField(32);



field.addEventListener('mousemove', (e) => {
    if (pressed) e.target.style.backgroundColor = 'black';
})
