const field = document.querySelector('.field');
const body = document.querySelector('body');
var pressed = false;

field.addEventListener('mousedown', (event) => {
    event.preventDefault(); 
    pressed = true;
});
body.addEventListener('mouseup', () => {
    pressed = false;
})
field.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'black';
})
field.addEventListener('mousemove', (e) => {
    if (pressed) e.target.style.backgroundColor = 'black';
})

function fillField(size){
    let width = field.offsetWidth;
    let pixelSize = width/size;
    for (let i = 0; i < size*size; i++){
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.setAttribute('style', `width: ${pixelSize}px; height: ${pixelSize}px`);

        field.append(pixel);
    }
}

function removeField(){
    document.querySelectorAll('.pixel').forEach(elem => elem.remove());    
}

const range = document.querySelector(".range");
const setting = document.querySelector(".setting");

range.addEventListener("input", () => {
    setSetting();
});
range.addEventListener("mouseup", () =>{
    removeField();
    fillField(setSetting());
})

function setSetting() {
    const val = range.value; 

    const min = range.min; 
    const max = range.max; 

    const steps = (val - min) / (max - min); //процент шага относительно текущего положения (val)

    setting.textContent = val + 'x' + val;

    const rangeWidth = range.offsetWidth;
    const settingWidth = setting.offsetWidth;
    const offsetLeft = steps * (rangeWidth - settingWidth); //умножаю процент шага на количество пикселей внутри 
                                                            //существующего поля (еще вычла ширину самого ползунка
                                                            //с названием setting. Таким образом считается количество
                                                            //пикселей, на который должен сместиться setting от левого 
                                                            //края, в зависимости от ширины поля и текущего значения.)

    setting.style.left = `${offsetLeft}px`; //смсещение

    return val;
}

fillField(setSetting());