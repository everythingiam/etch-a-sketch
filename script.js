const field = document.querySelector('.field');

var pressed = false;
function fillField(size){

    let square = size*size;

    let pixelSize = 500/size;
    for (let i = 0; i < square; i++){
        const pixel = document.createElement('div');
        pixel.setAttribute('style', `width: ${pixelSize}px; height: ${pixelSize}px`);

        field.append(pixel);
        field.addEventListener('mouseup', () => {
            return;
        })
        field.addEventListener('mousedown', () => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = 'black';
            })
        })
        // pixel.addEventListener('mousedown', () => pressed = true);
        // pixel.addEventListener('mouseup', () => pressed = false);
        // while (pressed){
        //     pixel.style.backgroundColor = 'black';
        // }
    }
    

}
fillField(64);

