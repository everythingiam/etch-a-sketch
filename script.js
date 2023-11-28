const field = document.querySelector('.field');
const body = document.querySelector('body');
const crearBtn = document.querySelector('.clear');
const eraserBtn = document.querySelector('.eraser');
const colorBtn = document.querySelector('.color');
const rainbowBtn = document.querySelector('.rainbow');

const FIELD_VALUE = 20;
setMode('color');

var pressed = false;
field.addEventListener('mousedown', (event) => {
    event.preventDefault(); 
    pressed = true;
});
body.addEventListener('mouseup', () => {
    pressed = false;
})

crearBtn.addEventListener('click', () => {
    removeField();
    fillField(setSetting(range.value));
})

colorBtn.onclick = () => setMode('color');
eraserBtn.onclick = () => setMode('eraser');
rainbowBtn.onclick = () => setMode('rainbow');

function setMode(mode){
    field.addEventListener('mousedown', (e) => {
        if (mode == 'color'){
            e.target.style.backgroundColor = 'black';
        } else if (mode == 'rainbow'){
            let randomColor = getRandomColor();
            e.target.style.backgroundColor = randomColor;
        } else if (mode == 'eraser'){
            e.target.style.backgroundColor = 'white';
        }
    });
    field.addEventListener('mouseover', (e) => {
        if (pressed) {
            if (mode == 'color'){
                e.target.style.backgroundColor = 'black';
            } else if (mode == 'rainbow'){
                let randomColor = getRandomColor();
                e.target.style.backgroundColor = randomColor;
            } else if (mode == 'eraser'){
                e.target.style.backgroundColor = 'white';
            }
        }
    })
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// function setMode(mode){
//  mode;
// }
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
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

range.value = FIELD_VALUE;

range.addEventListener("input", () => {
    let val = range.value; 
    setSetting(val);
});
range.addEventListener("mouseup", () =>{
    let val = range.value; 
    removeField();
    fillField(setSetting(val));
    setMode('color');
})

function setSetting(val) {
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
    arrowLeft.style.left = `${offsetLeft + 7}px`;
    arrowRight.style.left = `${offsetLeft + 83}px`;
    return val;
}

fillField(setSetting(FIELD_VALUE));
