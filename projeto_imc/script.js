function start() {
    console.log('Start')
    var buttomCalculateImc = document.querySelector('#buttom-calculate-imc');
    buttomCalculateImc.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick)
    inputHeight.addEventListener('input', handleButtonClick)

    handleButtonClick();
}

function calculateImc(weight, height){
    return weight / (height*height);
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imcResult')

    var weight = Number(inputWeight.valeu);
    var height = Number(inputHeight.valeu);

    var imc = calculateImc(weight, height);
    var formattedImc = imc.toFixed(2).replace('.',',');

    imcResult.textContent = formattedImc;

}

start();