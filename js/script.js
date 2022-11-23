let resultatsButton = document.querySelector('#resultats');
let numberCorrectAnswers = 0;
let numberIncorrectAnswers = 0;
let plusButton = document.querySelector('#plus');
let minusButton = document.querySelector('#minus');
let multiButton = document.querySelector('#multi');
let diviButton = document.querySelector('#divi');
let resultatsVide = document.querySelector('#resutatsvide');
let select = document.querySelector('select');
let min = 1;
let max = 10;
plusButton.onclick = function () {
    let randomNumberA = getRandomNumber();
    let randomNumberB = getRandomNumber();
    let userNumber = prompt(randomNumberA + ' + ' + randomNumberB + ' =');
    let correctNumber = Math.round(randomNumberA + randomNumberB);
    control(userNumber, correctNumber);
}
minusButton.onclick = function () {
    let randomNumberA = getRandomNumber();
    let randomNumberB = getRandomNumber();
    let userNumber = prompt(randomNumberA + ' - ' + randomNumberB + ' =');
    let correctNumber = Math.round(randomNumberA - randomNumberB);
    control(userNumber, correctNumber);
}
multiButton.onclick = function () {
    let randomNumberA = getRandomNumber();
    let randomNumberB = getRandomNumber();
    let userNumber = prompt(randomNumberA + ' * ' + randomNumberB + ' =');
    let correctNumber = Math.round(randomNumberA * randomNumberB);
    control(userNumber, correctNumber);
}
diviButton.onclick = function () {
    let randomNumberA = getRandomNumber();
    let randomNumberB = getRandomNumber();
    let userNumber = prompt(randomNumberA + ' / ' + randomNumberB + ' =\n' + 'Arrondis le nombre');
    let correctNumber = Math.round(randomNumberA / randomNumberB);
    control(userNumber, correctNumber);
}
resultatsButton.onclick = function () {
    alert('En tout :\n' +
        "Nombre de bonnes réponses - " + numberCorrectAnswers + '\n' +
        "Nombre de mauvaises réponses - " + numberIncorrectAnswers
    )
}
function getRandomNumber() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function control(userNumber, correctNumber) {
    if (userNumber == correctNumber) {
        alert("Bravo, c'est la bonne réponse 🏆​ 🏆​ 🏆​");
        numberCorrectAnswers++;
    } else {
        alert("Oh non, ce n'est pas la bonne réponse ​😭 ​😭​ 😭\n​" + 'La bonne réponse est : ' + correctNumber);
        numberIncorrectAnswers++;
    }
}
resultatsVide.onclick = function () {
    numberCorrectAnswers = 0;
    numberIncorrectAnswers = 0;
}
select.onchange = function () {
    let selectValue = select.value;
    switch (selectValue) {
        case '0': {
            min = 1;
            max = 10;
            break
        }
        case '1': {
            min = 10;
            max = 100;
            break
        }
        case '2': {
            min = 100;
            max = 1000;
            break
        }
        case '3': {
            min = 1000;
            max = 10000;
            break
        }
    }
}
